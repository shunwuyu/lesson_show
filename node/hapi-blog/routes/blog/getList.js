const redis = require('../../redis');

module.exports = (GROUP_NAME, options) => ({
  method: 'GET',
  path: `/${GROUP_NAME}`,
  handler: async (request, reply) => {
    const { limit, page } = request.query;
    const offset = (page - 1) * limit;
    const { setAsync, getAsync, client } = redis(request);
    const redisResName = `postlimit${limit}offset${offset}list`;
    const redisRes = await getAsync(redisResName);
    console.log(redisRes,);
    if (redisRes) {
      reply(JSON.parse(redisRes));
    } else {
      const { rows: results, count: totalCount } = await options.models.blog.findAndCountAll({
        limit,
        offset,
        attributes: { exclude: ['updated_at', 'content'] },
      });
      await setAsync(redisResName, JSON.stringify({ results, totalCount }));
      client.EXPIRE(redisResName, 5);
      reply({ results, totalCount });
    }
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '获取文章列表',
    validate: {
      query: {
        ...options.paginationDefine,
      },
    },
    auth: false
  }
});