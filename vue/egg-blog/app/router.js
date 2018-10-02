module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.page.index);
}