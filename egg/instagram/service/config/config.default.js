'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547696404138_6069';

  // add your config here
  config.middleware = [];
  config.security = {csrf: { enable: false }}
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '1234567890',
    database: 'learn'
  }
  
  return config;
};
