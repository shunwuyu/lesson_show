const Router = require('koa-router');
const appData = require('../data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;
const router = new Router({
  prefix: '/api'
});
router.get('/seller', async (ctx) => {
  ctx.body = {
    erron: 0,
    data: seller
  };
});

router.get('/goods', async (ctx) => {
  ctx.body = {
    erron: 0,
    data: goods
  };
});

router.get('/ratings', async (ctx) => {
  ctx.body = {
    erron: 0,
    data: ratings
  };
});

module.exports = router;
