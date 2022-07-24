const PatternScanner = require('./PatternScanner');

const ResponseHeader = Buffer.from([0xFF, 0x01, 0, 0]);
const RequestHeader = Buffer.from([0xFF, 0x00, 0, 0]);
const HEADER_LENGTH_BYTES = 20;
const HEADER_SIZE_OFFSET = 16;

class FrameAssembler {
  constructor(frameParser, isReq) {
    this.respBuffer;
    this.incompleteFrame = false;
    this.claimed = false;
    this.frameParser = frameParser;
    this.isReq = isReq;
  }

  applyData(data) {
    if (!this.respBuffer) {
      this.respBuffer = data;
    } 
    else {
      this.respBuffer = Buffer.concat([this.respBuffer, data]);
    }

    // Process all complete received frames
    while (this) {
      // Look for response header...
      let headerOffset = -1;

      if (!this.incompleteFrame) {
        headerOffset = this.isReq ? this.respBuffer.indexOf(RequestHeader) : this.respBuffer.indexOf(ResponseHeader);

        //With the Extra / Secondary stream the third byte is 1, with the Mainstream its 0,
        //might as well patternsearch because who knows how much more inconsistencies there are.
        if ((headerOffset === -1) && this.claimed) {
          console.log('-- PatternScanner');
          headerOffset = PatternScanner(this.respBuffer, 0, ResponseHeaderPattern_Video);
        }

        //Check if the resp header is present entirely
        if (headerOffset === -1) return;

        if (this.respBuffer.length < HEADER_LENGTH_BYTES) return this.incompleteFrame = true;
      } 
      else {
        headerOffset = 0;
      }

      //Check if the entirety of the associcated response has been received already
      const respLenAval = this.respBuffer.length - headerOffset;
      //We could use the Response parser at this point to avoid using
      //'bare numbers', but for the sake of optimization I wont here.
      const requiredRespLen = this.respBuffer.readUInt32LE(headerOffset + HEADER_SIZE_OFFSET) + HEADER_LENGTH_BYTES;
      //We've already seen a full response header, just the response body was partially missing.
      //No need to re-check whenever we receive the next bit of data
      if (respLenAval < requiredRespLen) return this.incompleteFrame = true;

      this.incompleteFrame = false;

      //Skip bytes before header start. Should never happen due to TCP being sorted and non-lossy
      if (headerOffset !== 0) {
        const newBuffer = Buffer.allocUnsafe(this.respBuffer.length - headerOffset);

        this.respBuffer.copy(newBuffer, 0, headerOffset);

        this.respBuffer = newBuffer;
        headerOffset = 0;
      }

      this.frameParser.parse(this.respBuffer);

      //Nothing more to currently parse after this cycle. Memory can finally be free'd
      if (requiredRespLen === this.respBuffer.length) return this.respBuffer = undefined;

      this.respBuffer = this.respBuffer.slice(requiredRespLen);
    }
  }
};

module.exports = FrameAssembler;