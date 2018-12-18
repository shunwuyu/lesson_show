'use strict';
import effect from './effect'
export const drawEffect = (canvasId, name, width, height, amount) => {
  let rain = effect(name, wx.createCanvasContext(canvasId), width, height, {
    amount: amount || 100,
    speedFactor: 0.03
  })
  return rain.run()
}

const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
