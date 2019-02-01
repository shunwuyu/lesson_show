const Service = require('egg').Service;
const qiniu = require('qiniu');
const accessKey = 'dEmhsEPeNiKY8RVSrzd9399KPWtZACMDZNZGK9HL';
const secretKey = 'cHuWO1suTPV6hX_tKbiVlgKaBuSs0pL7c5K2_m1_';
const publicBucketDomain = 'http://pm8f9ex31.bkt.clouddn.com';
const options =  {
  scope: 'instagram',
  expires: 7200
}

class QiniuService extends Service {
  async getQiniuToken () {
    if (!accessKey || !secretKey || !publicBucketDomain) {
      this.ctx.throw(400, '请配置七牛鉴权参数');
    }
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }
}

module.exports = QiniuService;