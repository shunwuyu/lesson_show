const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
router.get('/api', (ctx) => {
  const data = {
    name: 'zk',
    age: 18
  }
  const callback = ctx.query.callback;
  console.log(ctx.query);
  ctx.body = `${callback}(${JSON.stringify(data)})`;
})
app.use(router.routes());
app.listen(3000);