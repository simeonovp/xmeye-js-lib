const PcapReader = require('./PcapReader')
const FrameAssembler = require('./FrameAssembler')
const FrameParser = require('./FrameParser')

class XmeyeInterpretter {
  constructor(config) {
    this.reqParser = new FrameParser()
    // this.reqParser.onResponse = (frame => console.log(`XMeyeRequest: ${JSON.stringify(frame, null, 2)}`))

    this.resParser = new FrameParser()
    // this.resParser.onResponse = (frame => console.log(`XMeyeResponse: ${JSON.stringify(frame, null, 2)}`))

    this.reqAssembler = new FrameAssembler(this.reqParser, true)
    this.resAssembler = new FrameAssembler(this.resParser)

    this.pcapReader = new PcapReader()
    this.pcapReader.onRequest = data => { this.reqAssembler.applyData(data) }
    this.pcapReader.onResponse = data => { this.resAssembler.applyData(data) }
  }

  set onRequest(handler) { this.reqParser.onResponse = handler }

  set onResponse(handler) { this.resParser.onResponse = handler }

  parse(path, options) { this.pcapReader.parse(path, options) }
}

module.exports = XmeyeInterpretter