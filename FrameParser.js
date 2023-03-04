const ResponseCodes = require('./ResponseCodes')
const MessageIds = require('./MessageIds')
const VideopacketPayloads = require('./VideopacketPayloads')
const HEADER_LENGTH_BYTES = 20

const ReceiverTemplate = {
  onResponse: undefined,
  onMediaFrame: undefined
}

class FrameParser {
  constructor() {
    this.onResponse = (msg=>{})
    this.onVideoFrame = (msg=>{})
    this.onAudioFrame = (msg=>{})
    this.onDisconnect = (msg=>{})
  }

  parseHeader(buffer) {
    return {
      _Header: buffer.readUInt32LE(0),
      SessionID: buffer.readUInt32LE(4),
      SequenceID: buffer.readUInt32LE(8),
      Channel: buffer.readUInt8(12),
      Endflag: buffer.readUInt8(13),
      MessageId: buffer.readUInt16LE(14),
      Size: buffer.readUInt32LE(16)
    }
  }

  logFrame(str) {
    //console.log(str)
  }

  read(buffer) {
    const msg = {}
    msg.header = this.parseHeader(buffer)
    const length = HEADER_LENGTH_BYTES + msg.header.Size
    msg.body = (length > HEADER_LENGTH_BYTES) && buffer.slice(HEADER_LENGTH_BYTES, length)
    return msg
  }

  // DVRIPClient.cmdResponseParser
  parse(buffer) {
    const msg = this.read(buffer)
    const length = HEADER_LENGTH_BYTES + msg.header.Size
    
    if (!msg.body) {
      // ff 01 00 00 4a 00 00 00 00 00 00 00 00 01 8e 05 00 00 00 00
      this.logFrame('-- Client receive empty payload, length:' + length)
      this.onDisconnect()
    }
    else if ((msg.header.MessageId === MessageIds.MONITOR_DATA) 
      || (msg.header.MessageId === MessageIds.PLAY_DATA)) {

      if((msg.body[0] !== 0) || (msg.body[1] !== 0) || (msg.body[2] !== 1)) {
        this.logFrame('-- parse onVideoFrame (1), length:' + length)
        return this.onVideoFrame(msg.body)
      }
      
      let PayloadType = msg.body[3]
      if(PayloadType === VideopacketPayloads.Audio) {
        this.logFrame('-- parse onAudioFrame, length:' + length)
        return this.onAudioFrame(msg.body.slice(8))
      }

      //Failing to remove these 8-16 bytes for these messages for some reason makes FFMPEG unhappy.
      //The output is apparently still a valid video stream.
      if((PayloadType === VideopacketPayloads.IFrame) || (PayloadType === VideopacketPayloads.PlusEnc)) {
        this.logFrame('-- parse onVideoFrame (2), length:' + length)
        return this.onVideoFrame(msg.body.slice(16))
      }
      else {
        this.logFrame('-- parse onVideoFrame (3), length:' + length)
        return this.onVideoFrame(msg.body.slice(8))
      }
    }
    else if (msg.body[0] !== 123) { // '{'
      msg.payload = msg.body.toString('utf8')
    }
    else {
      const json = msg.body.toString('utf8', 0, msg.body[msg.body.length - 1] ? msg.body.length - 1 : msg.body.length - 2)
      msg.data = data = JSON.parse(json)
      msg.Ret = parsed.Ret
      msg.SessionID = parsed.SessionID
      if (msg.data.Ret && !ResponseCodes.SuccessCodes[msg.data.Ret]) {
        msg.ErrorMessage = ResponseCodes.ErrorCodes[msg.data.Ret] || 'Unknown error'
      }
    }
    this.onResponse(msg)
  }

}

module.exports = FrameParser