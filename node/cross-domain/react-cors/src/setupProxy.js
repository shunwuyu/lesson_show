const proxy = require('http-proxy-middleware');

// http://localhost:3000/api/a/b/c api 取数据  http://localhost:8080/a/b/c  
module.exports = function(app) {
  app.use(proxy('/api', {
    "target": "http://localhost:8080",
    "changeOrigin": true,
    "pathRewrite": {
      '^/api': ''
    }
  }));
}