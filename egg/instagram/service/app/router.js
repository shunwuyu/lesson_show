'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV2Router = app.router.namespace('/api/v2');
  // console.log(apiV2Router);
  router.get('/', controller.home.index);
  router.get('/api', controller.api.index);
  apiV2Router.post('/login/register', controller.login.register); 
  apiV2Router.get('/login', controller.login.loginIn);
};
