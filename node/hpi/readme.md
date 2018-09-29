[source](https://juejin.im/book/5b63fdba6fb9a04fde5ae6d0/section/5b73bb6951882561501ea3b3)

- 讲法
  外卖产口图-> 接口设计-》 响应格局思维
  重点讲到RESTful 

- 练习 
  新闻RESTful 设计

- 问题
  代码debug还不行
  

方法         路径                  是否需要登录          功能描述
POST       /users/wx-login          否                授权登录
GET        /articles                   否                新闻列表访问
GET        /articles/:{articleId}   否                文章详情
GET        /articles/:page          否                某页的文章列表
POST       /artilces/:{articleId}/comment 是          评论

- 想到
  格局思维

- 关联学习
[RESTful]  

本身不支持Cookie, 自身无状态化。
利用一套后端API接口服务， 同时支撑起小程序， 原生客户端， Web三个系统的业务数据， 高性价比方案。
一致化的RESTful API接口与标准化的JSON数据流。

API接口服务化的设计哲学

业务的通用视角， 基础接口设计

用户权鉴与业务的增删改查（CURD）

## 基础篇 1：业务需求分析与基础设计

动词
PUT 服务器更新资源(完整资源)
PATCH （改变的属性）
DELETE 删除

POST /users/wx-login  

行业业务共性，外卖系统，RESTful接口

hapi
来自沃尔玛
Lab&Code测试插件
Joi面向Object Schema的验证器插件
Bell 第三方登录
Good 监控日志插件
Boom 友好的HTTP错误返回插件
Catbox 缓存策略
hapi-auth-cookie 
Inert静态文件资源管理
tv debug 控制台
Vision网页模板渲染插件
and so on ....

建立代理， 转到外部Java服务
Swagger 结合最好

## 调试技巧
断点工具？自动重启

适当的调试工具与采用恰到好处的调试技巧， 

Node.js 原生Debugger模块使用的是V8-Debug Protcol, 
DevTools 使用Chrome Debugging Protocol。 
node-inspector 翻译和转达的作用

node -- inspect app.js

## Swagger

与语言无关的接口描述， 为REST APIs 定义一个标准的， 帮助我们在看不到源码的情况下能发现和理解各种服务的功能。
Joi 验证模块。 hapi-swagger且于生成接口文档。 
代码即文档的整合能力， 
任意的路由配置为API文档的一部份。 

## Sequelize-cli

店铺与商品列表信息展示的业务功能， 离不开数据库的支持。 
连接创建， 表结构的初始化， 起始数据的填充都是基础技术问题。 
店铺表
id         integer         自增
name       varchar(255)    店铺的名称
thumb_url  varchar(255)    店铺的图片
created_at datetime      
updated_at datetime


Sequelize 是Node.js 生态中一款知名的基于promise数据库ORM插件， 函数式API


## 基于JWT的身份验证

JWT JSON Web Token
安全传送JSON对象格式的信息， 而采用的开发标准， 
服务器在收到JWT后， 验证合法性， 用户登录与否是场景之一。
紧凑  header中， Authorization 字段
自包含 self-container
payload  用户ID

header, payload , signature 三部分组成。 
header 指定了该JWT使用的签名算法

授权登录的开发流程，最终将小程序的有效登录， 创建获取对应的相关用户， 签发JWT。

登录过程
wx.login() -> code -> hapi wxLogin appi+appsecret -> session_key + openid-> check mysql openid -》 创建
并返回用户|返回用户 -> jwt user_id
小程序 每次发送user_id

## 支付
1. 小程序内调用登录接口 openid, 
2. 商户server 调用支付统一下单
支付能力唤起， 
xml2js 
