const { Socket } = require('net')
const EventEmitter = require('events')
const FrameAssembler = require('./FrameAssembler')
const FrameParser = require('./FrameParser')
const FrameBuilder = require('./FrameBuilder')

const NullByte = Buffer.alloc(1)
const NullUint32 = Buffer.concat([NullByte, NullByte, NullByte, NullByte])

//Events:
//- connection:lost
//- connection:closed
//- connection:failed
//- connection:established
//- data:response
//- data::media

class Connection extends EventEmitter {

  constructor({ camIp, camMediaPort = 34567, commandTimeoutMs = 5000, log = null }, SessionId) {
    super()

    this._settings = {
      camIp,
      camMediaPort,
      commandTimeoutMs
    }

    this._callbacks = {}
    this._cmdSeq = 0
    this._sessionId
    this.setSessionId(SessionId)
    this._aliveKeeperInterval

    this._commandParser = new FrameParser()
    this._commandParser.onResponse = this.onResponse.bind(this)
    this._commandParser.onVideoFrame = this.onVideoFrame.bind(this)
    this._commandParser.onAudioFrame = this.onAudioFrame.bind(this)
    this._commandParser.onDisconnect = this.onDisconnect.bind(this)

    this._receiver = new FrameAssembler(this._commandParser)
    this._builder = new FrameBuilder()

    this._socket = new Socket()
    this._socket.setKeepAlive(true, 10000)
    this._socket.on('data', data=>this._receiver.applyData(data))
    this._socket.on('close', this.onSocketClose.bind(this) )
  }

  clone() {
    return new Connection(this._settings, this._sessionId)
  }

  onSocketClose() {
    //I dont think there is any point to having an unauthenticated connection, so lets 'ignore'
    //emitting of the connection:lost event if we are unauthenticated. This also doubles as
    //not emitting a connection:lost when manually calling disconnect()
    if (this._sessionId.buffer !== NullUint32) {
      this.disconnect()
    } 
    else {
      this.emit('connection:closed')
    }
  }

  onResponse(frame) {
    //Sometimes the sequence ID in the response will be +1 of what we've sent. I dont even know.
    const theCallback = this._callbacks[frame.header.SequenceID] || this._callbacks[frame.header.SequenceID - 1]

    if (theCallback) {
      const { resolve, reject } = theCallback()

      try {
        resolve(frame)
      } 
      catch (e) {
        reject(`Failed to parse what seemed like a JSON response: ${frame.toString('utf8')}`)
      }
    }
    //this.emit('data:response', data)
  }
  
  onVideoFrame(frame) {
    this.emit('data:video', frame)
  }

  onAudioFrame(frame) {
    this.emit('data:audio', frame)
  }

  onDisconnect(frame) {
    this.emit('data:eof')
  }

	/**
	 * Get current session. The buffer is passed by reference, so dont modify it.
	 * @return {DVRIPSession}
	 */
  get sessionId() { return this._sessionId }

  /**
	 * Get if we are connected
	 * @return {boolean}
	 */
  get isConnected() { return this._socket && !this._socket.destroyed && this._socket.remoteAddress }

   /**
    * Get if we are logged in
    * @return {boolean}
    */
  get isLoggedIn() { return this.isConnected && (this._sessionId.buffer !== NullUint32) }

 	/**
	 * Set session ID used for communication
	 *
	 * @param {Buffer|string|DVRIPSession} [byteBuffer] Session to use
	 */
  setSessionId(newSessionId = NullUint32) {
    let newSess

    if (newSessionId instanceof Buffer) {
      if (newSessionId.length !== 4) throw 'Session ID must be 4 bytes long'

      //Cloning the Buffer here so we arent relieant on a user-space passed buffer.
      newSess = { buffer: newSessionId, string: `0x${newSessionId.toString('hex')}` }
    } 
    else if (typeof newSessionId === 'string') {
      if (newSessionId.length !== 10) throw 'Invalid Session ID string'

      newSess = { buffer: Buffer.from(newSessionId.substr(2) /*Skip '0x'*/, 'hex').reverse(), string: newSessionId }
    } 
    else if ((typeof newSessionId === 'object') && newSessionId.buffer && newSessionId.string) {
      newSess = newSessionId
    }
    else {
      throw 'newSessionId must be a Buffer or String'
    }

    this._sessionId = Object.freeze(newSess)
  }

  setTimeout(timeout) {
    if (this.isConnected) this._socket.setTimeout(timeout)
  }

  resetSeqCounter() { this._cmdSeq = 0 }

  sendMessage(msg) {
    return new Promise((resolve, reject) => {
      if (!this.isConnected) return reject('Not connected')

      try {
        const cmdSeq = this._cmdSeq++
        const builtMessage = this._builder.buildMessage(msg, this._sessionId, cmdSeq)

        this._socket.write(builtMessage)

        if (msg.IgnoreResponse) return resolve()

        let timeoutReject = setTimeout(() => {
          if (this._callbacks[cmdSeq]) {
            reject('Execution timed out')
            delete this._callbacks[cmdSeq]
            timeoutReject = undefined
          }
        }, this._settings.commandTimeoutMs)

        const promiseWrapper = () => {
          if (!timeoutReject) return

          clearTimeout(timeoutReject)
          delete this._callbacks[cmdSeq]
          return { resolve, reject }
        }

        this._callbacks[cmdSeq] = promiseWrapper
      }
      catch (e) {
        reject(e)
      }
    })
  }

	setupAliveKeeper(msg, interval = 20) {
    if (this._aliveKeeperInterval)
      clearInterval(this._aliveKeeperInterval)

    this._aliveKeeperInterval = setInterval(() => {
      this.sendMessage(msg)
    }, interval * 1000)
  }

	connect() {
    if (this._socket.connecting || this.isConnected) throw 'Already connected'

    return new Promise((resolve, reject) => {
      const errorCb = () => {
        this.emit('connection:failed')
        reject('Failed to connect')
      }

      this._socket.once('error', errorCb)

      this._socket.setNoDelay(true)

      this._socket.connect(this._settings.camMediaPort, this._settings.camIp, () => {
        if (this._socket) this._socket.removeListener('error', errorCb)

        this.emit('connection:established')
        resolve()
      })
    })
  }

  disconnect() {
    this.setSessionId()
    clearInterval(this._aliveKeeperInterval)

    return new Promise((resolve, reject) => {
      if (!this.isConnected) return resolve()
      this.emit('connection:lost')
      this._socket.end(() => {
        this._socket.unref()
        resolve()
      })
    })
  }

}

module.exports = Connection