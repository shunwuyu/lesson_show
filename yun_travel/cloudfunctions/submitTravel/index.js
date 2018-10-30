// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const summary = event.summary;
    console.log(summary);
    return await db.collection("travels").add({
      data: {
        _openid:event.userInfo.openId,
        summary,
        add_time: new Date(),
        access_num: 0,
        link_num: 0,
        comment_num: 0,
        is_del: 0
      }
    });
  } catch(err) {
    console.log(err);
  }
}