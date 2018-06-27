webpack 是一个JS代码模块化的打包工具，功能完善的构建工具。

可以零配置开始进行构建，

本质上是一个打包工具， 根据代码的内容解析模块依赖， 帮助我们把多个模块的代码（不同文件类型）打包,
打包成构建项目运行需要的几个静态文件。

# 入口
起始的.js 文件 webpack 构建入口。
默认src/index.js

#loader 
  转换器， 把某种文件格式的内容转换成webpack可以支持打包的模块。

  不贩loader来处理不同类型的文件， 可以在module.rules字段下来配置相关的规则。 
  Babel处理.js文件

#plugin
  处理更多其他的一些构建任务。 模块代码转换的工作由loader来处理， 除此之外的工作由plugin来完成。
  js 压缩  uglifyjs-webpack-plugin DefinePlugin 定义环境变量， 生成CSS的文件 ExtractTextWebpackPlugin 
  plugin 干涉整个构建流程。 

#输出
  output: {
    path: path.resolve(__dirname, 'dist')
  }
  hash
  module.exports = {
    output: {
      filename: '[name].js',
      path: __dirname + '/dist/[hash]'
    }
  }

  webpack 的配置其实是一个 Node.js 的脚本, 配置对象， 

  resource,  issuer, 