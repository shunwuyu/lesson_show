const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const router = require('./routers');
const serve = require('koa-static');
const app = new Koa();
app.use(router.routes());
// console.log(__dirname + '/dist');
const staticServer = serve(path.join(__dirname, '/dist'));
app.use(staticServer);
app.use((ctx) => {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
  ctx.body = html;
});
app.listen(8082);
console.log('服务器已启动');


