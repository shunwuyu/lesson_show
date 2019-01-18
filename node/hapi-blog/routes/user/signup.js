const crypto = require('crypto');
const Boom = require('boom');

module.exports = (GROUP_NAME, options) => {
  const { Joi, models } = options;
  return {
    method: 'POST',
    path: `/${GROUP_NAME}/signup`,
    handler: async (request, reply) => {
      // todo ip 注册次数限制
      // 获取凭证
      const { username, passwd } = request.payload.userInfo;

      const res = await models.user.findOne({
        where: { username },
        attributes: ['id'],
      });
      if (res && res.id) {
        reply(Boom.conflict('该用户名已被注册'));
      } else {
        const encryptedPasswd = crypto.createHmac('sha256', process.env.PASSWD_SECRET).update(passwd).digest('hex');
        const newRes = await models.user.create({
          username,
          passwd: encryptedPasswd,
        });
        await newRes.save();
        newRes.passwd = '';
        reply([newRes]);
      }
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '用户注册',
      validate: {
        payload: {
          userInfo: Joi.object().keys({
            username: Joi.string().max(30).required().description('用户名'),
            passwd: Joi.string().min(8).max(30).required()
              .description('密码'),
          }).required(),
        },
      },
      auth: false,
    },
  };
};