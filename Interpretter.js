const PcapReader = require('./PCapReader');
const FrameAssembler = require('./FrameAssembler');
const FrameParser = require('./FrameParser');

class XmeyeInterpretter {
  constructor(config) {
    this.reqParser = new FrameParser();
    this.reqParser.onResponse = this.onRequest.bind(this);

    this.resParser = new FrameParser();
    this.resParser.onResponse = this.onResponse.bind(this);
    // this.resParser.onVideoFrame = this.onVideoFrame.bind(this);
    // this.resParser.onAudioFrame = this.onAudioFrame.bind(this);
    // this.resParser.onDisconnect = this.onDisconnect.bind(this);
    

    this.reqAssembler = new FrameAssembler(this.reqParser, true);
    //---
    // this.reqAssembler = new FrameAssembler({
    //   parse: data => {
    //     console.log(`reqParser.parse: ...`); //--
    //   }
    // });
    this.resAssembler = new FrameAssembler(this.resParser);

    this.pcapReader = new PcapReader();
    this.pcapReader.onRequest = data => { this.reqAssembler.applyData(data); };
    this.pcapReader.onResponse = data => { this.resAssembler.applyData(data); };
  }

  onRequest(frame) {
    console.log(`XmeyeRequest: ${JSON.stringify(frame, null, 2)}`);
  }

  onResponse(frame) {
    console.log(`XmeyeResponse: ${JSON.stringify(frame, null, 2)}`);
  }

  parse(path, options) {
    this.pcapReader.parse(path, options);
  }
}

module.exports = XmeyeInterpretter;