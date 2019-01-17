'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index () {
    const ctx = this.ctx;
    ctx.body = await this.ctx.model.User.findAndCountAll({
      limit: 10,
      offset: 0
    });
  }
}

module.exports =  UserController;