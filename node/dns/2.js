const dns = require('dns');
// 不会受host 影响
dns.resolve4('v.qq.com', (err, address) => {
  if (err) throw err;
  console.log(JSON.stringify(address));
});