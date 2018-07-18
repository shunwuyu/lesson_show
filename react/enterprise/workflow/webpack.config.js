const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const pkg = require('./package.json');
const autoprefixer = require('autoprefixer');
const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
console.log(IS_PROD, '========');
const VERSION = `v${pkg.version}`;
const OUTPUT_DIR = path.resolve(__dirname, 'build');
const CLIENT_DIR = path.join(OUTPUT_DIR, VERSION);
const SOURCE_DIR = path.resolve(__dirname, 'src');
module.exports = {
  entry: {
    client: './index.js'
  },
  output: {
    path: CLIENT_DIR,
    filename: 'assets/[name].[hash:8].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: IS_PROD ? [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { minimize: true },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              SOURCE_DIR,
            ],
          },
        },
      ] : [
        {
          loader: 'style-loader',
          options: { singleton: true },
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ browsers: 'last 5 versions' })],
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              SOURCE_DIR,
            ],
          },
        },
      ],
    }, {
      test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
      use: IS_PROD ? {
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'assets/images/',
        },
      } : {
        loader: 'url-loader',
      },
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.[hash:8].css',
      chunkFilename: 'assets/css/[id].[hash:8].css'
    }),
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: './index.html',
      template: './index.ejs'
    })
  ],
  "devServer": {
    "port": 8088,
    "host": "localhost"
  }
}