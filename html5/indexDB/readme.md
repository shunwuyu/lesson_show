[source](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)
将大量数据存储在客户端， 减少从服务器获取数据， 
不太适合存大量数据， Cookie 不超过4KB, 每次请求都会发送至服务器。
LocalStorage 在2.5 MB 和10MB 之间， 不提供搜索功能， 不能建立索引。
IndexDB 接近NoSQL
1. 键值对储存
2. 异步
3. 支持事务
  不存在只改写一部份数据的情况
4. 同源限制
5. 空间大  250MB 甚至没有上限
6. 支持二进制上限

- 基本概念  
  IDBDatabase 数据库
  IDBObjectStore  对象仓库
  IDBIndex 索引
  IDBTranscation 事务
  IDBRequest 操作请求
  IDBCursor 指针
  IDBKeyRange 主键集合
  1. 数据库
    版本,升级版本
  2. 对象仓库
  3. 数据记录
    主键和数据体两部份
    数据体可以是任何类型
  4. 索引
  5. 事物
  