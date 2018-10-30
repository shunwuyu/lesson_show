// 云函数入口文件
const cloud = require('wx-server-sdk')
const fs = require('fs')
const path = require('path')

cloud.init()
// const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const fileStream = fs.createReadStream(path.join(__dirname, 'demo.png'))
  return await cloud.uploadFile({
    cloudPath: 'demo.png',
    fileContent: fileStream,
  })
  // return db.collection('todos').get()
  // // return new Promise((resolve, reject) => {
  // //   setTimeout(() => {
  // //     resolve(event.a + event.b)
  // //   }, 3000)
  // // })

}