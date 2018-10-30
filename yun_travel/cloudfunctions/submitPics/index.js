// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const pics = event.pics;
    const travel_id = event.travelId;
    console.log(pics, travel_id);
    let promisedAddPicArray = [];
    for (let i = 0; i < pics.length; i++) {
      const promisedAddPic = db.collection("travel_photos").add({
        data: {
          _openid: event.userInfo.openId,
          travel_id: travel_id,
          url: pics[i],
          is_del: 0
        }
      });
      promisedAddPicArray.push(promisedAddPic)
    }
    return await Promise.all(promisedAddPicArray);
  } catch(err) {
    console.log(err);
  }
}