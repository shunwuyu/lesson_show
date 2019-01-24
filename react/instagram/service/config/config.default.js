'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547697514094_687';

  // add your config here
  config.middleware = [];
  config.security = { csrf: { enable: false } }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '1234567890',
    database: 'learn'
  }
  config.authWhiteList = ['/','/api/v2/','/api/v2/login', '/api/v2/user/register'];
  // ctx request    response
  config.middleware = ['authorization'];
  config.password_secret = 'ps1234secr';
  config.auth_cookie_name = 'token';
  config.jwtSecret = 'shawzhou';
  return config;
};
