const Hapi = require('hapi');

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
  port: 1235,
  host: '127.0.0.1',
});

const init = async () => {
  // 启动服务
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
  console.log('dddd');
};

init();