var Redis = require('ioredis')
var redis = new Redis()

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