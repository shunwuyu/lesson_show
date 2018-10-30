// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require('got');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let getResponse = await got('httpbin.org/get')
  let postResponse = await got('httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '这是标题',
      value: 123
    })
  })
  return postResponse.body
}