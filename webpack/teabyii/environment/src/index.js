require('./style.less')
const { log } = require('./utils')
log('hello world')

if (__DEV__) {
  log('In development ...')
}