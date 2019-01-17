const dayjs = require('dayjs');
const Boom = require('boom');

module.exports = (GROUP_NAME, options) => {
  const {
    models, blogMetadataDefine, jwtHeaderDefine,
  } = options;

  return {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      const { userId } = request.auth.credentials;

    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '新增文章',
      validate: {
        ...jwtHeaderDefine,
        payload: blogMetadataDefine
      },
    },
  }
}