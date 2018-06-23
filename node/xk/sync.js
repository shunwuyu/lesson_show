const http = require('http');
const zlib = require('zlib');
const responseText = 'hello world';

const server = http.createServer((req, res) => {
  const acceptEncoding = req.headers['accept-encoding'];
  if (acceptEncoding.indexOf('gzip') != -1) {
    res.writeHead(200, {
      'content-encoding': 'gzip'
    });
    res.end(zlib.gzipSync(responseText));
  } else {
    res.end(responseText);
  }
})

server.listen(8080);