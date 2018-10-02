const Joi = require('joi');
const xml2js = require('xml2js');
const axios = require('axios');
const crypto = require('crypto');
const models = require('../models');
const config = require('../config');
const GROUP_NAME = 'orders';
const { jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      // console.log('ssss');
      await models.sequelize.transaction((t) => {
        console.log(t);
        const result = models.orders.create(
          { user_id: request.auth.credentials.userId },
          { transaction: t },
        ).then((order) => {
          const goodsList = [];
          request.payload.goodsList.forEach((item) => {
            goodsList.push(models.order_goods.create({
              order_id: order.dataValues.id,
              goods_id: item.goods_id,
              single_price: 4.9,
              count: item.count,
            }));
          });
          return Promise.all(goodsList);
        });
        return result;
      }).then(() => {
        reply('success');
      }).catch(() => {
        reply('error');
      })
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
      validate: {
        payload: {
          goodsList: Joi.array().items(
            Joi.object().keys({
              goods_id: Joi.number().integer(),
              count: Joi.number().integer(),
            })
          )
        },
        ...jwtHeaderDefine,
      }
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      // reply();
      const user = await models.users.findOne({ id: request.auth.credentials.userId });
      const { openid } = user;
      const unifiedorderObj = {
        appid: config.wxAppid,
        body: '小程序支付',
        mch_id: config.wxMchild,
        
      }
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        params: {
          orderId: Joi.string().required(),
        },
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).unknown(),
      }
    },
  },
];