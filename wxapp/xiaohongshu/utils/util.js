wx.cloud.init();
const db = wx.cloud.database();
const notes = db.collection('notes');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const loadNotes =   (fn = () => {}, page = 1,  limit = 10) => {
  // console.log('loadNotes');
  const skip = (page -1 ) * limit;
  let total = 0;
  notes
    .count()
    .then(res => {
      total = res.total;
      return notes
        .limit(limit)
        .skip(skip)
        .get()
    })
    .then(res => {
      fn({
        total,
        data: res.data
      })
    })
  // return notes
  //   .limit(limit)
  //   .skip(skip)
  //   .get()
}

module.exports = {
  formatTime: formatTime,
  loadNotes
}
