// console.log(process.env.NODE_ENV);
const Hapi = require('hapi');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const routesBlog = require('./routes/blog');
const routesUser = require('./routes/user');
require('env2')('./.env');
const { env } = process;
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const pluginHapiRedis = require('./plugins/hapi-redis');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');

const server = new Hapi.Server();
server.connection({
  host: env.HOST,
  port: env.PORT,
});

const start = async () => {
  await server.register([
    hapiAuthJWT2,
    ...pluginHapiSwagger,
    pluginHapiPagination,
    pluginHapiRedis
  ]);
  pluginHapiAuthJWT2(server);

  server.route([
    ...routesBlog,
    ...routesUser
  ]);
  await server.start();
  console.log(`Server running at:${server.info.uri}`);
};

start();