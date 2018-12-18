import Promise from './bluebird'

const QQ_MAP_KEY = 'GAMBZ-OKBR3-56K36-3MYJS-QNMNQ-XPBIA';

wx.cloud.init({
  env: 'codingdream-74b4e5'
})

export const geocoder = (lat, lon, success = () => {}, fail = () => {}) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}
