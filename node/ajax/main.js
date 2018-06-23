const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    // res.end('hello');
    res.writeHead(
      200, {
        'Content-Type': 'text/html;charset=utf8'
      }
    )
    index.pipe(res);
  } else if (req.url == '/info') {
    console.log('dddf');
    const info = {
      "name": '曾凯',
      "desc": '身骑白马'
    };

    res.writeHead(
      200, {
        'Content-Type': 'text/plain;charset=utf8'
      }
    )
    res.end(JSON.stringify(info));
  }
}); 

server.listen(1234);