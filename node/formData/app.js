const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const userInfos = {
  "123": {
    username: "李志坚",
    sex: "男"
  },
  "456": {
    username: "唐增睿",
    sex: "男"
  }
}

const server = http.createServer((req, res) => {
  console.log(req.url); 
  if (req.url === '/rhino.png') {
    const png = fs.readFileSync('./rhino.png')
    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.end(png);
    return;
  }

  if (req.url.indexOf('/getInfo') >= 0 ) {
    // console.log(req);
    const qs = req.url.split('?')[1];
    // console.log(qs);
    const params = querystring.parse(req.url.split('?')[1]);
    // console.log(params);
    const info = userInfos[params.id];
    console.log(info);
    res.end(JSON.stringify(info));
    return;
  }

  const index = fs.readFileSync('./index.html', 'utf8');
  // console.log(index);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})