const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = merge.smart(baseConfig, {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    port: '1234',
    before(app) {
      app.get('/api/test.json', function(req, res) {
        res.json({ code: 200, message: 'hello world'})
      })
    }
  }
})

config.plugins.push( 
  new webpack.DefinePlugin({
    __DEV__: JSON.stringify(true)
  })
)
module.exports = config