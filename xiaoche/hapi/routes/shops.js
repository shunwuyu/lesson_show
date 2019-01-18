const models = require("../models");
module.exports = [
  {
    method: 'GET',
    path: '/shops',
    handler: async (request, reply) => {
      // 通过 await 来异步查取数据
      const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
        attributes: [
          'id',
          'name',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
      // 开启分页的插件，返回的数据结构里，需要带上 result 与 totalCount 两个字段
      reply({ results, totalCount });
    }
  },
  {
    method: 'GET',
    path: `/shops/{shopId}/goods`,
    handler: async (request, reply) => {
      // 增加带有 where 的条件查询
      const { rows: results, count: totalCount } = await models.goods.findAndCountAll({
        // 基于 shop_id 的条件查询
        where: {
          shop_id: request.params.shopId,
        },
        attributes: [
          'id',
          'name',
        ],
        limit: request.query.limit,
        offset: (request.query.page - 1) * request.query.limit,
      });
    },
  }
]