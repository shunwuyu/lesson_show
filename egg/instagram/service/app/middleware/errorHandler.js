module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next(option);
    } catch(err) {
      app.emit('error', err);
      const status = err.status || 500;
      const error_msg = status === 500 && app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;

      console.log(err, '=========');
      
      ctx.body = {
        data: {},
        message: error_msg,
        success: false
      };
      ctx.status = status;
    }
  };
};