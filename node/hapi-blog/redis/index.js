const { promisify } = require('util');

module.exports = (request) => {
  const { client } = request.server.plugins['hapi-redis'];
  const getAsync = promisify(client.GET).bind(client);
  const setAsync = promisify(client.SET).bind(client);
  const hgetallAsync = promisify(client.HGETALL).bind(client);
  const hgetAsync = promisify(client.HGET).bind(client);
  const hmsetAsync = promisify(client.HMSET).bind(client);

  return {
    client,
    getAsync,
    setAsync,
    hgetallAsync,
    hgetAsync,
    hmsetAsync,
  };
};