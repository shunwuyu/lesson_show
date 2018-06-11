function padNum(n) {
    n = n.toString();
    return n.length > 1 ? n : '0' + n;
}

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

function disposeDate(timestamp) {
    return ([timestamp.getFullYear(), timestamp.getMonth() + 1, timestamp.getDate()]).map(padNum).join('-');
}

function getRecentDate(len = 7) {
    let endDate = new Date();

    let tmp = endDate.getTime() - 1000 * 60 * 60 * 24 * len,
        startDate = new Date(tmp);

    return [disposeDate(startDate), disposeDate(endDate)];
}

module.exports = {
  formatTime: formatTime,
  getRecentDate: getRecentDate
}
