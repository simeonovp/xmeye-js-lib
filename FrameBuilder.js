const MessageIds = require('./MessageIds');
const CommandHeader = Buffer.from([0xFF, 0x01, 0, 0]);

const MsgTemplate = {
  Command: 0,
  MessageName: '',
  MessageData: {},
  IgnoreResponse: false
};


class FrameBuilder {

  buildMessageBody({ MessageName = undefined, MessageData = {} }, SessionId) {
    let data = {
      Name: MessageName,
      ...MessageData
    };

    if (SessionId) data.SessionID = SessionId;

    //If name is undefined stringify will not add it to
    //the stringified result this is desired behaviour.
    return JSON.stringify(data);
  }

  // returns buffer builded from message
  buildMessage(msg, SessionId, SequenceId) {
    const MessageBody = msg.MessageData || msg.MessageName ? Buffer.from(this.buildMessageBody(msg, SessionId.string)) : undefined;
    const msgLen = MessageBody ? MessageBody.length + 1 : 0; // (+1 for trailing newline)

    const command = (typeof msg.Command === 'string') ? MessageIds[msg.Command] : msg.Command;
    if(!command || (command !== parseInt(command, 10))) throw 'Unknown/Invalid Command variable passed ' + msg.Command;

    const fromBuffer = [
      ...CommandHeader,
      ...SessionId.buffer,
      SequenceId, SequenceId >> 8, SequenceId >> 16, SequenceId >> 24,
      0, 0, //Reserved?
      command, command >> 8,
      msgLen, msgLen >> 8, msgLen >> 16, msgLen >> 24,
    ];

    if (!MessageBody) return Buffer.from(fromBuffer);

    //-- console.log('-- buildMessage ' + MessageBody);
    return Buffer.concat([Buffer.from(fromBuffer), MessageBody, Buffer.from('\n')]);
  }

};

module.exports = FrameBuilder;