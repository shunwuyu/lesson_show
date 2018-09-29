- start 出示问题， webpack 打包工具
- 安装
  4.0 后单独安装
  npm scrip 运行一下

- 围绕basic 来实现一下
  

details/webpack.config.js 
- 入口 
  从根开始， 顺腾摸瓜
  引入 format 和log  js 文件 + alias
  lodash 插件  可以全局使用

- style-load 
  normalize.css  style-loader css-loader
  index.less 预编译 .less less-loader 
  less  里面有图片， 匹配图片
  css 要单独成文件 ExtractTextPlugin.extract
  plugins  new ExtractTextPlugin('[name.css]')

- plugin
npm install extract-text-webpack-plugin@next --save-dev
  HtmlWebpackPlugin html模板， 会自动引入css js
  DefinePlugin 定义常量
  CopyWebpackPlugin 将favicon 拷到根下

- devServer
  最后由webpack-dev-server  
  scripts  start  webpack-dev-server --mode development


- webpack environment
  configs 两个文件， 接近vue-cli了
  config目录下两文件的区别
  dev
    devServer
    __DEV__ 定义 
  pro
    html plugin
    css extract

## 优化前端资源的加载性能
文件越小越好， 越少越好。  webpack 很大程度上减少了静态资源请求数量了， 
- css sprites
  postcss   postcss.config.js 做配置
- 图片大小优化 image-webpack-loader webp
  小于8KB, 转成data-url  base64 download.png
- css 压缩
  {
            loader: 'css-loader',
            options: {
              minimize: true, // 使用 css 的压缩功能
            },
          },

## 分离代码文件

浏览器的缓存及在webpack中实现按需加载代码
extract-text-webpack-plugin  分离css ? 更好的利用缓存
一个.js， 一旦改变了， 重新加载一个新的JS文件。
公用部份共享

entry vendor
chunks: ['vendor'],

# 按需加载功能模块

# Tree shaking
  静态结构特性， JS上下文中未引用代码， 删除用不着的代码， 有效减少代码文件大小。