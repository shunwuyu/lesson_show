'use strict';

const Controller = require('egg').Controller;

class HandlerController extends Controller {
  async getQiniuToken() {
    const { ctx } = this
    let token = await ctx.service.qiniu.getQiniuToken();
    ctx.returnBody(200, "获取token成功", {
      token: token,
      baseUrl: 'http://pm8f9ex31.bkt.clouddn.com'
    })
  }
}

module.exports = HandlerController;
