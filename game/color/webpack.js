const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    index: './common.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new uglify()
  ],
  output: {
    path: path.resolve(__dirname, './'),
    library: 'ColorGame',
    libraryExport: 'default',
    filename: 'colorGame.js'
  }
}