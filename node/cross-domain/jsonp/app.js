const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
router.get('/', async(ctx) => {
  const data = {uid: 1000};
  // const callback = ctx.request.query.callback || null;
  // if (callback) {
  //   ctx.body = `${callback}(${JSON.stringify(data)})`
  // } else {
    ctx.body = data;
  // }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => {
  console.log('server is running');
})