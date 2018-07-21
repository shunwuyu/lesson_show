const path = require('path')
const webpack = require('webpack')
// const amwWebpack = require('antd-mobile-web/webpack')


module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                }
            }
        ]
    },
      {
          test: /\.jsx$/i,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader'
          }
      }
    ]
  }
}