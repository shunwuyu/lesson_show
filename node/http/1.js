const http = require('http');
const server = http.createServer((req, res) => {
  // res 现在成了服务器
  const url = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/plain;charset=utf8'
  })
  res.end('您访问的地址是：' + url);
});

const client = http.get('http://127.0.0.1:3000', (res) => {
  res.pipe(process.stdout);
})

server.listen(3000);