# 小程序 Gulp 开发脚手架

* sass 开发 wxss
* webfont 自动 base64 引入
* 支持 px2rpx
* es6/7 开发 js
* 支持生产环境打包
* 支持小程序云
* 支持小程序云函数、存储 mock
* 支持 watch 功能

## 配置

* config.server.json 是 mock server 的配置

## 目录结构

```
├── README.md
├── client            // 小程序 client 部分，主要编写内容
│   ├── app.js
│   ├── app.json
│   ├── app.scss
│   ├── project.config.json  // 小程序项目配置，比如：云函数文件夹
│   ├── components   // 组件
│   ├── images       // 图片资源
│   ├── lib
│   │   ├── api-mock.js   // api-mock 功能，详见文档「云函数 mock」部分
│   │   ├── api.js       // 实际 api
│   │   ├── bluebird.js
│   │   └── util.js
│   └── pages
│       └── index
├── config.server.json
├── dist
├── gulpfile.js
├── package.json
├── server           // 小程序 server 部分，主要是静态资源和云函数
│   ├── cloud-functions
│   │   ├── test
│   │   └── test2
│   ├── index.js
│   ├── inline    // 云函数公共模块，打包的时候会 inline 进引入的云函数
│   │   └── utils.js
│   └── static
│       └── gulp.png
└── test         // 测试文件夹
    └── functions  // 存储小程序云测试用的参数模板
        └── test.json
```

## 使用
1. git clone 之后，进入文件夹，执行`npm i`安装依赖
2. 使用方法如下：

```bash
# 启动 gulp 编译 client 文件夹
npm run dev
# 启动 server，有nodemon，修改文件会自动重启
npm run server
# 上线打包
npm run build
# watch cloud functions 自动同步到 dist/cloud-functions
```


## 云函数 mock
小程序Serverless云的云函数功能很好用，解决了前端开发小程序后端服务的痛点，但是云函数每次修改都要上传部署到线上才能测试，的确是很费时费力，我这里使用了express 做了个 mock server，原理是：

1. 将云函数代码拆分成单例
2. 在`server/index.js`中，将云函数作为一个 express 的中间件函数使用
3. 在本地开发中，小程序前端调用的云函数`wx.cloud.callFunction`的时候，替换成`api-mock.js`中的使用 `wx.request` 调用的本地 mock server 接口
4. 使用 jdists 开发时候使用本地的 `api-mock`，生产打包则暴漏真正的`api.js`（详见：`pages/index/index.js`）



