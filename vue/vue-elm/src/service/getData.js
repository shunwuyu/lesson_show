import axios from 'axios'
const $http = axios.create({
  baseURL: 'https://elm.cangdu.org',
  timeout: 10000
});

export const getUser = () => {}
export const hotcity = () => fetch('https://elm.cangdu.org/v1/cities?type=hot')
export const cityGuess = () => new Promise((resolve, reject) => {
  $http.get('https://elm.cangdu.org/v1/cities?type=guess')
    .then(res => resolve(res.data))
})

export const getcaptchas = () => fetch('https://elm.cangdu.org/v1/captchas', {
  method: "POST",
  body: {},
  headers: {
　 'Accept': 'application/json',
　 'Content-Type': 'application/json',
　}
})

export const currentcity = (number) => fetch('https://elm.cangdu.org/v1/cities/' + number)

export const searchplace = (cityid, value) => fetch(`https://elm.cangdu.org/v1/pois?type=search&city_id=${cityid}&keyword=${value}`)

export const accountLogin = (username, password, captcha_code) => {
  // console.log(username, password, captcha_code)
  return new Promise((resolve, reject) => {
    $http.post('/v2/login', {
      username,
      password,
      captcha_code
    }).then(res => {
      resolve(res)
    })
  })
}


export const msiteFoodTypes = (geohash) => {
  return new Promise((resolve, reject) => {
    $http.get('/v2/index_entry',{
      geohash,
      group_type: '1',
      'flags[]': 'F'
    }).then(res => resolve(res.data))
  })
}

export const msiteAddress = geohash => new Promise((resolve, reject) => {
  $http.get('/v2/pois/'+geohash)
    .then(res => resolve(res.data))
})

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => new Promise((resolve,reject) =>{
  $http.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=${offset}&limit=20`)
    .then(res => resolve(res.data))
});

export const foodCategory = (latitude, longitude) => new Promise((resolve, reject) => {
  $http.get(`/shopping/v2/restaurant/category?latitude=${latitude}&longitude=${longitude}`)
    .then(res => resolve(res.data))
})
