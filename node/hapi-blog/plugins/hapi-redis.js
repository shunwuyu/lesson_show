const hapiRedis = require('hapi-redis');

const { env } = process;

const options = {
  connection: {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD,
    opts: {
      parser: 'javascript',
    },
  },
};


module.exports = {
  register: hapiRedis,
  options,
};