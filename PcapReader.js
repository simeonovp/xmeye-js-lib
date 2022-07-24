const PCAPNGParser = require('pcap-ng-parser');
const fs = require('fs');

const ethHeaderOffset = 0;
const ethHeaderLength = 14;
const ipHeaderOffset = ethHeaderOffset+ ethHeaderLength;
const ipHeaderLength = 20;
const protHeaderOffset = ipHeaderOffset + ipHeaderLength;
const udpHeaderLength = 8;
const tcpHeaderLength = 20;
const tcpPayloadOffset = protHeaderOffset + tcpHeaderLength;
const protTcp = 6;
const flagTcpPSH = 8;

class PcapReader {

  constructor(config) {
    this.config = {
      logger: console,
      camip: null,
      cammac: null,
      camport: null,
      camprot: 0, //0 - default (TCP)
      ...config
    };
    this.onRequest = null;
    this.onResponse;
  }

  parse(path, { camip, camport }) { //camip as ArrayBuffer with length 4
    const error = this.config.logger.error;
    const log = this.config.logger.log;
    const pcapNgParser = new PCAPNGParser();
    const fileStream = fs.createReadStream(path);
    
    // alloc anf initialize header filter
    const reqHeader = Buffer.alloc(tcpPayloadOffset);
    reqHeader.writeUInt16BE(0x0800, ethHeaderOffset + 0x0c); // type IPv4
    reqHeader.writeUInt8(0x45, ipHeaderOffset + 0x00); // version
    reqHeader.writeUInt8(protTcp, ipHeaderOffset + 0x09);

    const resHeader = Buffer.alloc(tcpPayloadOffset);
    resHeader.writeUInt16BE(0x0800, ethHeaderOffset + 0x0c); // type IPv4
    resHeader.writeUInt8(0x45, ipHeaderOffset + 0x00); // version
    resHeader.writeUInt8(protTcp, ipHeaderOffset + 0x09);
    
    camip = camip || this.config.camip;
    if (camip) {
      if (camip.length !== 4) return error('invalid camip length ' + camip.length);
      for (let i = 0; i < camip.length; i++) {
        reqHeader.writeUInt8(camip[i], ipHeaderOffset + 0x10); //dst_ip
        resHeader.writeUInt8(camip[i], ipHeaderOffset + 0x0c); //src_ip
      }
    }

    camport = camport || this.config.camport;
    if(camport) {
      reqHeader.writeUInt16BE(camport, protHeaderOffset + 0x02); //dst_port
      resHeader.writeUInt16BE(camport, protHeaderOffset + 0x00); //src_port
    }

    
    const isRequest = data => {
      for (let i = 0; i < reqHeader.length; i++) if (reqHeader[i] && (reqHeader[i] != data[i])) return false;
      if (!(data[protHeaderOffset + 0x0d] & flagTcpPSH)) return false; // no data package
      const length = data.readInt16BE(ipHeaderOffset + 0x02) - ipHeaderLength - tcpHeaderLength;
      if (length <= 0) {
        error(`Request length (${length}, ${data.length}) <= 0`);
        log(data);
        return false;
      }
      if (tcpPayloadOffset + length !== data.length) {
        error(`Request length (${length}) invalid (${tcpPayloadOffset + length} != ${data.length})`);
        log(data);
        return false;
      }
      return true;
    };

    const isResponse = data => {
      for (let i = 0; i < resHeader.length; i++) {
        if (resHeader[i] && (resHeader[i] != data[i])) return false;
      }
      if (!(data[protHeaderOffset + 0x0d] & flagTcpPSH)) return false;
      const length = data.readUInt16BE(ipHeaderOffset + 0x02) - ipHeaderLength - tcpHeaderLength;
      if (length <= 0) {
        error(`Response length (${length}, ${data.length}) <= 0`);
        log(data);
        return false;
      }
      if (tcpPayloadOffset + length !== data.length) {
        error(`Response length (${length}) invalid (${tcpPayloadOffset + length} != ${data.length})`);
        log(data);
        return false;
      }
      return true;
    };

    fileStream.pipe(pcapNgParser)
      .on('data', chunk => {
        const data = chunk && chunk.data;
        if (data.length < tcpPayloadOffset) return;
        
        if (this.onRequest && isRequest(data)) {
          this.onRequest(data.subarray(tcpPayloadOffset));
        }
        else if (this.onResponse && isResponse(data)) {
          this.onResponse(data.subarray(tcpPayloadOffset));
        }
/*
{
  interfaceId: 0,
  timestampHigh: 386162,
  timestampLow: 445811299,
  data: <Buffer 00 50 b6 be 7a 27 00 12 41 73 fb 39 08 00 45 00 05 dc fb 39 40 00 40 06 b5 ea c0 a8 01 a4 c0 a8 01 03 00 50 ec 98 d2 28 f2 7c 0f 1f 71 6c 50 10 07 a7 ... 1464 more bytes>
  
  #eth[14]
  dst_mac[6], 0x00
  src_mac[6], 0x06
  type[2],  IPv4 (0x0800)
  
  #ip[20]
  vers[1], 0x00 (0x45)
  service[1], 0x01 (0x00)
  length[2], 0x02 <-- ip_header(20)+tcp_header(20)+payload
  id[2], 0x04
  flags[1], 0x06
  fragm_offs[1], 0x07
  ttl[1], 0x08
  protocol[1], 0x09
  header_cs[2], 0x0a
  src_ip[4], 0x0c
  dst_ip[4], 0x10
  
  #udp[8]
  src_port[2]
  dst_port[2]
  length[2]
  udp_sc[2]

  #tcp[20]
  src_port[2], 0x00
  dst_port[2], 0x02
  seq_nr[4], 0x04
  ack_nr[4], 0x08
  vers_flags[2], 0x0c
  window[2], 0x0e
  tcp_cs[2], 0x10
  urgent_ptr[2], 0x12
  
  #data
}    
*/
      //this.config.logger.log(data);
    })
    .on('interface', interfaceInfo => {
/*
{
    linkType: 1,
    snapLen: 262144,
    name: 'en0'
}
*/
      //this.config.logger.log(interfaceInfo);
    })
  }
}

module.exports = PcapReader;