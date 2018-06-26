const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/index',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ],
  },

  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'), // 这里使用 path.resolve 和 __dirname 来获取绝对路径
      log$: path.resolve(__dirname, 'src/utils/log.js')
    },
    extensions: ['.js', '.css', '.less'],
    modules: [
      path.resolve(__dirname, 'node_modules'), // 指定当前目录下的 node_modules 优先查找
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      TWO: '1+1',
      CONSTANTS: {
        APP_VERSION: JSON.stringify('1.1.2')
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/favicon.ico',
        to: 'favicon.ico'
      }
    ])
  ],
  devServer: {
    port: '1234',
    before(app) {
      app.get('/api/test.json', (req, res) => {
        res.json({
          code: 200,
          message: 'hello world'
        })
      })
    }
  }
}