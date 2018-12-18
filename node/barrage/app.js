const WebSocket = require('ws');
const redis = require('redis');
const clientRedis = redis.createClient(6379, '127.0.0.1', {});
clientRedis.auth('foobared', function() {
  console.log('通过认证');
});
const ws = new WebSocket.Server({ port: 8080 });

let clients = [];

ws.on('connection', socket => {
  clients.push(socket); 
  // console.log('-----');
  clientRedis.lrange('barrages', 0, -1, (err, data) => {
    console.log(err);
    console.log(data);
    data = data.map(item => JSON.parse(item));
    console.log(data);
    socket.send(JSON.stringify({
      type: 'init',
      data
    }))
  })
  socket.on('message', data => {
    console.log(data);
    clientRedis.rpush('barrages', data);
    clients.forEach(sk => {
      sk.send(JSON.stringify({
        type: 'add',
        data: JSON.parse(data)
      }));
    })
  });
  socket.on('close', () => {
    clients = clients.filter(client => client !== socket);
  })
})