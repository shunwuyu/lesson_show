// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const travelInfoCount = await db.collection("travels").count();
    let travelInfos = await db.collection("travels").where({
      is_del: 0
    }).orderBy("add_time", "desc").skip(event.startIndex).limit(event.count).get();
    console.log(travelInfos) 
    for (let i = 0; i < travelInfos.data.length; i++) {
      console.log(travelInfos.data[i]._openid);
      const user = await db.collection("users").where({
        _openid: travelInfos.data[i]._openid,
        is_del: 0, 
      }).limit(1).get();
      console.log(user);
      travelInfos.data[i].user = user.data[0];
      const travelPic = await db.collection("travel_photos").where({
        is_del: 0,
        travel_id: travelInfos.data[i]._id
      }).get()
      travelInfos.data[i].pic = travelPic.data
    }
    const hasMore = travelInfoCount > (event.startIndex + travelInfos.data.length) ? true : false;
    travelInfos.hasMore = hasMore;
    return travelInfos;

  } catch(e) {
    console.error(e);
  }

}