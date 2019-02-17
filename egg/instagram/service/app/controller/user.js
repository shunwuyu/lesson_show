'use strict';
const crypto = require('crypto');

const Controller = require('egg').Controller;

class UserController extends Controller {
  async userInfo() {
    const {ctx} = this;
    let userId = ctx.query.userId || ctx.user.userId; //传值或jwt
    console.log(userId, '??????');
    let user = await this.service.user.getUserByUserId(userId)
    let userInfo = {
      username: user.username,
      email: user.email,
      avatarUrl: user.avatarUrl,
      abstract: user.abstract,
      account: user.email.replace(/@.*/, ''),
      mobile: user.mobile,
      sex: user.sex,
      userId: user.userId
    }
    ctx.returnBody(200, "获取成功", userInfo);
  }
  async updateUserInfo () {
    const {ctx, app} = this
    let userId = ctx.user.userId

    let contentBody = ctx.request.body
    
    // 更新已使用的他人邮箱地址
    // if (contentBody.email) {
    //     let result = await this.service.user.getUserByMail(contentBody.email)
    //     if (result && result.userId !== userId) {
    //         ctx.returnBody(400, "该邮箱已被其他账户使用")
    //         return
    //     }
    // }

    // 密码校验不通过
    let result = await this.service.user.getUserByUserId(userId)
    contentBody.newPassword = crypto.createHmac('sha256', app.config.password_secret).update(contentBody.password).digest('hex');
    if (contentBody.password && result && result.password !== contentBody.newPassword) {
      ctx.returnBody(400, "旧密码不正确")
      return
    } else if(contentBody.password) {
      contentBody.password = contentBody.newPassword
    }

    
    // 获取并填充数据
    await this.service.user.updateUserInfo({userId}, contentBody)

    // 已更改密码，让用户重新登录
    if (contentBody.password) {
        ctx.logout();
        ctx.cookies.set(this.config.auth_cookie_name, "");
        ctx.returnBody(401, "密码更新成功，请重新登录")
    } else {
        ctx.returnBody(200, "更新成功")
    }
}
}

module.exports = UserController;
