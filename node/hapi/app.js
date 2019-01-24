const Hapi = require('hapi');
require('env2')('./.env');
const config = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShop = require('./routes/shops');
const routesOrder = require('./routes/orders');
const routesUsers = require('./routes/users');
const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
    pluginHapiPagination,
  ]);
  await server.register([
    hapiAuthJWT2
  ]);
  pluginHapiAuthJWT2(server);

  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrder,
    ...routesUsers
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();