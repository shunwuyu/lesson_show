module.exports = (GROUP_NAME, options) => {
  const { Joi, models, Boom } = options;
  return {
    method: 'GET',
    path: `/${GROUP_NAME}/{id}`,
    handler: async (request, reply) => {
      const { id: blogId } = request.params;
      const res = await models.blog.find({
        where: {
          id: blogId,
        },
      });
      if (!res) {
        reply(Boom.notFound('资源请求失败'));
      }
      // todo redis 更新阅读数量
      const incCount = res.count + 1;
      await models.blog.update({
        count: incCount,
      }, {
        where: {
          id: blogId,
        },
      });
      reply(res);
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '根据 id 获取文章详情',
      validate: {
        params: {
          id: Joi.number().min(1).required().description('需要查询详情的文章 id'),
        },
      },
      auth: false,
    },
  };
};