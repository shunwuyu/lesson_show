import Vue from 'vue'
import VueI18n from 'vue-i18n'
import customZhCn from './lang/zh-CN'
import customEnUs from './lang/en-US'
import zhCnLocale from 'iview/src/locale/lang/zh-CN'
import enUsLocale from 'iview/src/locale/lang/en-US'

Vue.use(VueI18n)

const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang

Vue.local = () => {}

const messages = {
  'zh-CN': Object.assign(zhCnLocale, customZhCn)
}
