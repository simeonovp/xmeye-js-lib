const MessageIds = require('./MessageIds')
const CommandHeader = Buffer.from([0xFF, 0x01, 0, 0])

const MsgTemplate = {
  Command: 0,
  MessageName: '',
  MessageData: {},
  IgnoreResponse: false
}


class FrameBuilder {

  buildMessageHeader(sessionId, sequenceId, messageId, messageLen) {
    // build message header (20 bytes)
    const fromBuffer = [
      ...CommandHeader,
      ...sessionId.buffer,
      sequenceId, sequenceId >> 8, sequenceId >> 16, sequenceId >> 24,
      0, 0, //Reserved?
      messageId, messageId >> 8,
      messageLen, messageLen >> 8, messageLen >> 16, messageLen >> 24,
    ]

    return Buffer.from(fromBuffer)
  }

  buildMessageBody(sessionId, messageName = undefined, messageData = {}) {
    let data = {
      Name: messageName,
      ...messageData
    }

    if (sessionId) data.SessionID = sessionId

    //If name is undefined stringify will not add it to
    //the stringified result this is desired behaviour.
    return Buffer.from(JSON.stringify(data))
  }

  // returns buffer builded from message
  buildMessage(msg, sessionId, sequenceId) {
    const msgBody = msg.MessageData || msg.MessageName ? this.buildMessageBody(sessionId.string, msg.MessageName, msg.MessageData) : undefined
    const msgLen = msgBody ? msgBody.length + 1 : 0 // (+1 for trailing newline)

    const command = (typeof msg.Command === 'string') ? MessageIds[msg.Command] : msg.Command
    if(!command || (command !== parseInt(command, 10))) throw 'Unknown/Invalid Command variable passed ' + msg.Command

    // build message header (20 bytes)
    const msgHeader = this.buildMessageHeader(sessionId, sequenceId, command, msgLen)

    if (!msgBody) return msgHeader

    //-- console.log('-- buildMessage ' + MessageBody)
    return Buffer.concat([msgHeader, msgBody, Buffer.from('\n')])
  }

}

module.exports = FrameBuilder