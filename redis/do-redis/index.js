var redis = require('redis'),
  client = redis.createClient({host: '127.0.0.1', port: 6379, password: 'Ysw1fvb1'});

client.on("error", function(err) {
  console.log("Error " + err);
});

client.set("hello", "world", redis.print);
client.get("hello", function(err, reply) {
  console.log(reply.toString());
});