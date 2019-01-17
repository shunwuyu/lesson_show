const Router = require('koa-router');

const home = new Router();
home.get('/', async (ctx) => {
  const title = '首页';
  ctx.cookies.set('username', 'lisa', {
    domain: 'localhost',
    path: '/',
    maxAge: 1000*60*60*24*15,
    expires: new Date('2019-10-1'),
    httpOnly: false,
    overwrite: false
  })
  ctx.cookies.set('uid', '1000', {
    domain: 'localhost',
    path: '/',
    httpOnly: true
  })
  ctx.body = title; 
})

const router = new Router();
router.use('/', home.routes(), home.allowedMethods());

module.exports = router;