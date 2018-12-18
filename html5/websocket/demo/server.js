const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(3000);
const Server = require('ws').Server;
const ws = new Server({ port: 9999 });
ws.on('connection', function(socket) {
  socket.on('message', function(msg) {
    console.log(msg);
    socket.send(`这里是服务器对你说的话：${msg}`);
  })
});