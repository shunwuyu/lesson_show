const Hapi = require('hapi');
const path = require('path');
const crypto = require('crypto');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  await server.register(require('inert'));
  
  server.route({
    method: 'GET',
    path: '/users',
    handler: (request, reply) => {
      const users = [
        {
            gender: 'female',
            name: {
                title: 'ms',
                first: 'manuela',
                last: 'velasco'
            },
            location: {
                street: '1969 calle de alberto aguilera',
                city: 'la coruña',
                state: 'asturias',
                zip: '56298'
            }
        }
      ];

      // const hash = Crypto.createHash('sha1');
      // hash.update(JSON.stringify(users));
      // const etag = hash.digest('base64');
      return users;
    }
  })

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();