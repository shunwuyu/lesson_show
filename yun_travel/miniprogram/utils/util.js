function formatNumber(n) {
  const num = n.toString();
  return num[1] ? num : `0${num}`;
}

function formatTime(date, type) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let time = '';
  switch (type) {
    case 1:
      time = `${[year, month, day].map(formatNumber).join('.')}`;
      break;
    case 2:
      time = `${[year, month, day].map(formatNumber).join('.')} ${[hour, minute].map(formatNumber).join(':')}`;
      break;
    case 3:
      time = `${[year, month, day].map(formatNumber).join('.')} ${[hour, minute, second].map(formatNumber).join(':')}`;
    break;
    case 4:
      time = `${[year, month, day].map(formatNumber).join('')}${[hour, minute, second].map(formatNumber).join('')}`;
    break;
  }
  return time;
}

function getFileExtention(filePath){
  return filePath.match(/\.[^.]+?$/)[0];
}

module.exports = {
  formatNumber,
  formatTime,
  getFileExtention,
};