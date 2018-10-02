const Koa = require('koa');
const cors = require('koa-cors');
const router = require('./routers/index');
const app = new Koa();
app.use(cors({
  origin: 'http://localhost:3002',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(async (ctx, next) => {
  console.log(ctx.request.path + ':' + ctx.request.method);
  await next();
});
app.use(router.routes());
app.listen(3006);
console.log('app started at port 3006...');