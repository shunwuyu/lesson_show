'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    console.log(this.ctx);
    this.ctx.body = 'hi, api';
  }
}

module.exports = ApiController;
