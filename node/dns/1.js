const dns = require('dns');
// dns.lookup('www.qq.com', (err, address, family) => {
//   if (err) throw err;
//   console.log('例子A:' + address);
// })

const options = {all: true};
dns.lookup('www.qq.com', options, (err, address, family) => {
  if (err) throw err;
  console.log(address);
});
