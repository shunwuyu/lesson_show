'use strict';
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Service = require('egg').Service;

class UserService extends Service {
  async register(user) {
    const {ctx, app} = this
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
    user.password = crypto.createHmac('sha256', app.config.password_secret).update(user.password).digest('hex');
    const userInfo = await this.ctx.model.User.create(user);

    ctx.status = 200;
    ctx.body = {
      msg: '注册成功',
      userId: user.userId,
      flag: true  
    }
    return userInfo.dataValues;
  }

  async login(user) {
    const { app } = this;
    const existUser = await this.getUserByMail(user.email);
    // console.log(existUser);
    if (!existUser) {
      return null;
    }
    const passhash = existUser.password;
    
    const equal = passhash == crypto.createHmac('sha256', app.config.password_secret).update(user.password).digest('hex')
    console.log(equal, '++++++++');
    if (!equal) {
      return false;
    }

    const token = jwt.sign({userId: existUser.userId}, app.config.jwtSecret, {expiresIn: '7d'});
    console.log(token);
    return token;
  }

  async updateUserInfo(query, updateValue) {
    return this.ctx.model.User.update(updateValue, { 
        where: query
    })
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

  async getUserByMail(email) {
    return this.ctx.model.User.findOne({
      where: {
        email
      }
    })
  }

  async getUserByUserId(userId) {
    const query = { userId: userId };
    return this.ctx.model.User.findOne({
      where: query
    })
  }
}

module.exports =  UserService;