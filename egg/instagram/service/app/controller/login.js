'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIn() {
    this.ctx.body = 'hi, Login';
  }
  async register () {
    const {ctx} = this;
    const {password, username, email} = ctx.request.body
    console.log(`${password} ${username} ${email}`);
    // ctx.body = `${password} ${username} ${email}`;
    // if (!this.__errNotice) return
    await ctx.service.user.register({ password, username, email })
  }
}

module.exports = LoginController;
