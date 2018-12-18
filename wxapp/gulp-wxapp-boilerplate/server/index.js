const path = require('path')
const express = require('express')
const {PORT} = require('../config.server.json')
const heWeather = require('./cloud-functions/he-weather/').main
const test = require('./cloud-functions/test/').main
const test2 = require('./cloud-functions/test2/').main

const app = express()

// 添加static
app.use(
  '/static',
  express.static(path.join(__dirname, 'static'), {
    index: false,
    maxage: '30d'
  })
)

app.get('/api/he-weather', (req, res, next) => {
  console.log(req.query);
  heWeather(req.query).then(res.json.bind(res)).catch((e) => {
    console.error(e)
    next(e)
  })
})

// 添加云函数mock
app.get('/api/test2', (req, res, next) => {
  test2(req.query).then(res.json.bind(res)).catch((e) => {
    console.error(e)
    next(e)
  })
})
app.get('/api/test', (req, res, next) => {
  test(req.query).then(res.json.bind(res)).catch((e) => {
    console.error(e)
    next(e)
  })
})

app.listen(PORT, () => {
  console.log(`开发服务器启动成功：http://127.0.0.1:${PORT}`)
})
