const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // inFile.pipe(gzip).pipe(res.end);
  const acceptEncoding = req.headers['accept-encoding'];
  if (acceptEncoding.indexOf('gzip') != -1) {
    gzip = zlib.createGzip();
    res.writeHead(200, {
      'Content-Encoding': 'gzip',
      'Content-Type': 'text/plain;charset=utf-8'
    });
    fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
  } else {
    fs.createReadStream('./a.txt').pipe(res);
  }
  // console.log(acceptEncoding);
  
  // res.end('hello');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})