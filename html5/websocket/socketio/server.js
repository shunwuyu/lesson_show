const express = require('express');
const app = express();
app.use(express.static(__dirname));
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.send('青花瓷');
  socket.on('message', function(msg) {
    console.log(msg);
    socket.send('天青色等烟雨，而我在等你');
  });
});
server.listen(3000);