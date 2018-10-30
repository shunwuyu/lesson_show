// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got')
const appid = 'wxf440ec69475cbdbf'
const appsecret = 'b8e95a32c4cd44111e36fa6c7d079fc0'
const url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + appsecret


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(url);
  const token_response = await got.get(url)
  let token = JSON.parse(token_response.body).access_token
  console.log('https://api.weixin.qq.com/wxa/getwxacode?access_token=' + token);
  console.log(event);
  let fStream = await got('https://api.weixin.qq.com/wxa/getwxacode?access_token=' + token, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "path": "pages/photo/photo" + event
    })
  })

  return await cloud.uploadFile({
    cloudPath: 'qrcode.jpg',
    fileContent: fStream.body
  })

}