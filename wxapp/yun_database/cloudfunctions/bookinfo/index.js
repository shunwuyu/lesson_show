// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=6e52eeba3b41f520e539eb263e6d8c13`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=6e52eeba3b41f520e539eb263e6d8c13`).then( html => {
    return html;
  }).catch(err => {
    console.log(err);
  })
  return res
}