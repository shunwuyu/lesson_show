const baseConfig = require('./overrides-config.base');

module.exports = function(config) {
  let alias = config.resolve.alias;
  alias["@"] = baseConfig.rootPath;
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"]
  });
  config.plugins.push(baseConfig.stylusLoaderOptionsPlugin);
};