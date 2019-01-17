var Redis = require('ioredis')
var redis = new Redis({
  port: 6379,
  host: '127.0.0.1',
  password: 'Ysw1fvb1'
})

redis.set('test-redis-expire', 1);
redis.expire('test-redis-expire', 3)
redis.get('test-redis-expire', (err, value) => {
  console.log(value)
});

setTimeout(() => {
  redis.get('test-redis-expire', (err, value) => {
    console.log(value);
  });
}, 5000)