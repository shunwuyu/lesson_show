const Hapi = require('hapi');
const path = require('path');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  await server.register(require('inert'));
  server.route({
    method: 'GET',
    path: '/jd.jpg',
    handler: function (request, reply) {
       const response = reply.file(path.join(__dirname,'jd.jpg'));
      //  response.header('Cache-Control', 'max-age=86400');
       return response;
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  })

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();