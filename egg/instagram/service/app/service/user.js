'use strict';
const uuid = require('uuid')
const Service = require('egg').Service;

class UserService extends Service {
  async register(user) {
    const {ctx} = this
    user.userId = uuid.v4().replace(/-/g, '');
    const queryResult = await this.hasRegister(user.email);
    console.log(queryResult);
    if (queryResult) {
      ctx.status = 200;
      ctx.body = {
        msg: "邮箱已被使用",
        flag: false
      }
      return
    } 
    const userInfo = await this.ctx.model.User.create(user);

    ctx.status = 200;
    ctx.body = {
      msg: '注册成功',
      userId: user.userId,
      flag: true  
    }
    return userInfo.dataValues;
  }

  async hasRegister(email) {
    const user = await this.ctx.model.User.findOne({
      where: { email: email }
    });

    if (user && user.dataValues.userId) {
      return true;
    }

    return false;
  }
}

module.exports =  UserService;