const ResponseCodes = require('./ResponseCodes');
const MessageIds = require('./Messages');
const VideopacketPayloads = require('./VideopacketPayloads');
const HEADER_LENGTH_BYTES = 20;

const ReceiverTemplate = {
  onResponse: undefined,
  onMediaFrame: undefined
}

class FrameParser {
  constructor() {
    this.onResponse = (msg=>{});
    this.onVideoFrame = (msg=>{});
    this.onAudioFrame = (msg=>{});
    this.onDisconnect = (msg=>{});
  }

  parsHeader(buffer) {
    return {
      _Header: buffer.readUInt32LE(0),
      SessionID: buffer.readUInt32LE(4),
      SequenceID: buffer.readUInt32LE(8),
      Channel: buffer.readUInt8(12),
      Endflag: buffer.readUInt8(13),
      MessageId: buffer.readUInt16LE(14),
      Size: buffer.readUInt32LE(16)
    };
  }

  logFrame(str) {
    //console.log(str);
  }

  // DVRIPClient.cmdResponseParser
  parse(buffer) {
    const msg = {};
    msg.header = this.parsHeader(buffer);
    const length = HEADER_LENGTH_BYTES + msg.header.Size;
    
    if (length === HEADER_LENGTH_BYTES) {
      // ff 01 00 00 4a 00 00 00 00 00 00 00 00 01 8e 05 00 00 00 00
      this.logFrame('-- Client receive empty payload, length:' + length);
      this.onDisconnect();
    }
    else if ((msg.header.MessageId === MessageIds.MONITOR_DATA) 
      || (msg.header.MessageId === MessageIds.PLAY_DATA)) {

      const RawBody = buffer.slice(HEADER_LENGTH_BYTES, length);
      if((RawBody[0] !== 0) || (RawBody[1] !== 0) || (RawBody[2] !== 1)) {
        this.logFrame('-- parse onVideoFrame (1), length:' + length);
        return this.onVideoFrame(RawBody);
      }
      
      let PayloadType = RawBody[3];
      if(PayloadType === VideopacketPayloads.Audio) {
        this.logFrame('-- parse onAudioFrame, length:' + length);
        return this.onAudioFrame(RawBody.slice(8));
      }

      //Failing to remove these 8-16 bytes for these messages for some reason makes FFMPEG unhappy.
      //The output is apparently still a valid video stream.
      if((PayloadType === VideopacketPayloads.IFrame) || (PayloadType === VideopacketPayloads.PlusEnc)) {
        this.logFrame('-- parse onVideoFrame (2), length:' + length);
        return this.onVideoFrame(RawBody.slice(16));
      }
      else {
        this.logFrame('-- parse onVideoFrame (3), length:' + length);
        return this.onVideoFrame(RawBody.slice(8));
      }
    }
    // else if (length === HEADER_LENGTH_BYTES) {
    //   // ff 01 00 00 4a 00 00 00 00 00 00 00 00 01 8e 05 00 00 00 00
    //   this.logFrame('-- Client receive empty payload, length:' + length);
    //   this.this.onDisconnect();
    // }
    else if (buffer[20] !== 123) { // '{'
      msg.payload = buffer.toString('utf8', 20, buffer.length);
    }
    else {
      const jsonString = buffer.toString('utf8', HEADER_LENGTH_BYTES, buffer[length - 1] ? length - 1 : length - 2);
      try {
        const parsed = JSON.parse(jsonString);
        msg.Ret = parsed.Ret;
        msg.SessionID = parsed.SessionID;

        if (parsed.Ret && !ResponseCodes.SuccessCodes[parsed.Ret]) {
          msg.ErrorMessage = ResponseCodes.ErrorCodes[parsed.Ret] || 'Unknown error';
        }
      
        if (parsed.Name) {
          msg.data = parsed[parsed.Name];
          msg.name = parsed.Name;
        } 
        else {
          const retMap = {};
          for (let dataKey in parsed) {
            if ((dataKey !== 'SessionID') && (dataKey !== 'Ret')) retMap[dataKey] = parsed[dataKey];
          }
          msg.data = retMap;
        }
      }
      catch(e) {
        console.log('-- jsonString:' + jsonString);
        throw e;
      }
    }
    this.onResponse(msg);
  }

};

module.exports = FrameParser;