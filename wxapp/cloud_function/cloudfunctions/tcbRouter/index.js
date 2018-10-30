// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')
cloud.init()
// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({ event })

  app.use(async (ctx, next) => {
    console.log("进入全局的中间件")
    ctx.data = {}
    ctx.data.openId = event.userInfo.openId
    await next();
    console.log("退出全局的中间件")
  })

  app.router(['user', 'school'], async (ctx, next) => {
    console.log("进入数组的路由中间件")
    ctx.data.from = '小程序云函数实战'
    await next();
    console.log("退出数组的路由中间件")
  })

  app.router('user', async (ctx, next) => {
    console.log("进入用户的路由中间件")
    ctx.data.name = 'HuanCheng Bai'
    ctx.data.role = 'Developer'
    await next();
    console.log("退出用户的路由中间件")
  }, async (ctx) => {
    console.log("进入用户昵称的路由中间件")
    ctx.data.nickName = 'Bestony'
    ctx.body = { code: 0, data: ctx.data }
    console.log("进入退出昵称的路由中间件")
  })

  app.router('school', async (ctx, next) => {
    ctx.data.name = '腾讯云学院'
    ctx.data.url = 'cloud.tencent.com'
    await next();
  }, async (ctx) => {
    ctx.data.nickName = '学院君'
    ctx.body = { code: 0, data: ctx.data }
  })

  return app.serve();
}