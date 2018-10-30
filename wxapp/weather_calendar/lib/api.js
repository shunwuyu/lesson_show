wx.cloud.init({
  env: 'codingdream-74b4e5'
})

const db = wx.cloud.database()

export const getEmotionByOpenidAndDate = (openid, year, month) => {
  const _ = db.command
  year = parseInt(year)
  month = parseInt(month)

  let start = new Date(year, month - 1, 1).getTime()
  let end = new Date(year, month, 1).getTime()
  // console.log(openid, start, end);
  return db
    .collection('diary')
    .where({
      openid,
      tsModified: _.gte(start).and(_.lt(end))
    })
    .get()
}

export const jscode2session = (code) => {
  // console.log(code);
  return wx.cloud.callFunction({
    name: 'jscode2session',
    data: {
      code
    }
  })
}

export const addEmotion = (openid, emotion) => {
  return db.collection('diary').add({
    data: {
      openid,
      emotion,
      tsModified: Date.now()
    }
  })
}