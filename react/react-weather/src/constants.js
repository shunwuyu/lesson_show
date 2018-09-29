const IP_TO_LOCATION_BASIC_URL = 'http://apis.map.qq.com/ws/location/v1/ip'

const TENCENT_KEY_PARAM = 'key=CFPBZ-EGOCF-PCCJF-NSHVY-CNRQQ-QCF4R'

const IP_TO_LOCATION_OPTIONS_PARAM = 'output=jsonp'

export const IP_TO_LOCATION = `${IP_TO_LOCATION_BASIC_URL}?${TENCENT_KEY_PARAM}&${IP_TO_LOCATION_OPTIONS_PARAM}`

// 和风天气API

const HEWEATHER_BASIC_API = 'https://free-api.heweather.com/s6'

const HEWEATHER_KEY_PARAM = 'key=2abfa2fc72df455999054a61622b6aca'

export const LOCATION_TO_CITY_ID = `${HEWEATHER_BASIC_API}/search?${HEWEATHER_KEY_PARAM}`

export const REAL_TIME_WEATHER = `${HEWEATHER_BASIC_API}/weather/now?${HEWEATHER_KEY_PARAM}`

export const REAL_TIME_AIR_QUALITY = `${HEWEATHER_BASIC_API}/air/now?${HEWEATHER_KEY_PARAM}`

export const WEATHER_FORECAST = `${HEWEATHER_BASIC_API}/weather/forecast?${HEWEATHER_KEY_PARAM}`

// 天气状态图片(存储于七牛云)

export const WEATHER_CONDITION_IMAGE_BASIC_URL =
  'http://ox6lgrhmo.bkt.clouddn.com/'