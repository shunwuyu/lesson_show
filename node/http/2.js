const net = require('net');

const PORT = 8989;
const HOST = '127.0.0.1';

const server = net.createServer((socket) => {
  // console.log('Connected:' + socket.remoteAddress + ':' + socket.remotePort);
  socket.on('data', (data) => {
    console.log('DATA ' + socket.remoteAddress + ': ' + data);
    console.log('Data is: ' + data);
    socket.write('Data from you is "' + data + '"');
  });
  socket.on('close', () => {
    console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
  });
});
server.listen(PORT, HOST);
console.log(server instanceof net.Server);
