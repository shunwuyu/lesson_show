[source](https://github.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/stream.md)

- 回忆  
  进程
  process.stdout

nodejs 核心模块， 基本都是stream的实例，process.stdout, http.clientRequest.
四种类型
  Readable  用来读取数据  fs.createReadStream()
  Writeable 写的流
  Duplex 可读+可写
  Transform  在读写过程中， 对数据进行修改 zlib.createDeflate()

  

