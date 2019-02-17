'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async loginIn () {
    const {ctx} = this;
    const {password, email} = ctx.request.body
    // 登录
    const token = await ctx.service.user.login({password, email})
    // set cookie
    if (token) {
        // id存入Cookie, 用于验证过期.
        const opts = {
            path: '/',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: false,
            domain: '127.0.0.1'
        };
        ctx.cookies.set(this.config.auth_cookie_name, token, opts);
        console.log(ctx.cookies.get(this.config.auth_cookie_name), '++++++++++');
        ctx.returnBody(200, "登录成功")
    } else {
        ctx.throw(400, '用户名或密码错误')
    }
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
