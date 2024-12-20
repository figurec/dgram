const dns = require('node:dns');
const os = require('node:os');

const options = { family: 4 };

dns.lookup(os.hostname(), options, (err, addr) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`IPv4 address: ${addr}`);
  }
});



const dgram = require('node:dgram');
const UdpServer = dgram.createSocket('udp4');

UdpServer.on('error', (err) => {
  console.error(`UdpServer error:\n${err.stack}`);
  UdpServer.close();
});

UdpServer.on('message', (msg, rinfo) => {
  console.log(`UdpServer got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

UdpServer.on('listening', () => {
  const address = UdpServer.address();
  console.log(`UdpServer listening ${address.address}:${address.port}`);
});

UdpServer.bind(49999);
// Prints: server listening 0.0.0.0:41234
