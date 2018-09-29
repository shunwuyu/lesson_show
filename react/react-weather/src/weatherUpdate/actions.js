import {
  FETCH_REAL_TIME_WEATHER_START,
  FETCH_REAL_TIME_WEATHER_SUCCESS,
  FETCH_REAL_TIME_WEATHER_FAILURE,
  FETCH_WEATHER_FORECAST_START,
  FETCH_WEATHER_FORECAST_SUCCESS,
  FETCH_WEATHER_FORECAST_FAILURE
} from './actionTypes'

import {
  REAL_TIME_WEATHER,
  REAL_TIME_AIR_QUALITY,
  WEATHER_FORECAST
} from '../constants'

// 更新实时天气

let nextFetchRealTimeWeatherId = 0

export const fetchRealTimeWeatherStart = () => ({
  type: FETCH_REAL_TIME_WEATHER_START
})

export const fetchRealTimeWeatherSuccess = weatherInfo => ({
  type: FETCH_REAL_TIME_WEATHER_SUCCESS,
  payload: {
    ...weatherInfo
  }
})

export const fetchRealTimeWeatherFailure = error => ({
  type: FETCH_REAL_TIME_WEATHER_FAILURE,
  payload: error,
  error: true
})

// 异步获取实时天气数据
export const fetchRealTimeWeather = (cityId, parentCityId) => {
  return (dispatch, getState) => {
    // 自定义dispatch使其可以抛弃旧的异步获取的实时天气数据，只显示最新的数据
    const currentFetchRealTimeWeatherId = ++nextFetchRealTimeWeatherId

    const dispatchIfValid = action => {
      if (currentFetchRealTimeWeatherId === nextFetchRealTimeWeatherId) {
        dispatch(action)
      }
    }

    // 开始获取实时天气数据
    dispatchIfValid(fetchRealTimeWeatherStart())

    // 发送请求

    // 返回fetch请求的函数
    const createFetchWeatherReq = baiscUrl => {
      return fetch(`${baiscUrl}&location=${cityId}`)
        .then(response => response.json())
        .then(json => {
          const data = json.HeWeather6[0]

          // 通过城市id无法获取到天气信息或响应数据异常
          // 尝试通过父城市id来获取天气信息
          if (data.status !== 'ok') {
            return fetch(`${baiscUrl}&location=${parentCityId}`)
              .then(response => response.json())
              .then(json => {
                const data = json.HeWeather6[0]

                // 通过父城市id还无法获取天气信息或响应数据异常
                if (data.status !== 'ok') {
                  throw new Error('fetch weather error')
                }
                return data
              })
          }
          return data
        })
    }

    // 获取实时天气基本数据
    const fetchBasicWeather = createFetchWeatherReq(REAL_TIME_WEATHER)

    // 获取实时空气质量数据
    const fetchAirQuality = createFetchWeatherReq(REAL_TIME_AIR_QUALITY)

    // 并行发送请求(两个请求直接没有依赖性)
    Promise.all([fetchBasicWeather, fetchAirQuality])
      .then(result => {
        // basicWeather and airQuality
        const [bw, aq] = result

        // 获取数据
        const realTimeWeather = {
          updateTime: bw.update.loc,
          tmp: bw.now.tmp,
          condCode: bw.now.cond_code,
          condText: bw.now.cond_txt,
          windDir: bw.now.wind_dir,
          windPower: bw.now.wind_sc,
          aqi: aq.air_now_city.aqi,
          aqt: aq.air_now_city.qlty
        }

        // 成功获取实时天气数据
        dispatchIfValid(fetchRealTimeWeatherSuccess(realTimeWeather))
      })
      .catch(error => {
        console.log(error)

        // 获取实时天气数据异常
        dispatchIfValid(fetchRealTimeWeatherFailure(error))
      })
  }
}

// 更新天气预报

let nextFetchWeatherForecastId = 0

export const fetchWeatherForecastStart = () => ({
  type: FETCH_WEATHER_FORECAST_START
})

export const fetchWeatherForecastSuccess = weatherForecast => ({
  type: FETCH_WEATHER_FORECAST_SUCCESS,
  payload: {
    weatherForecast
  }
})

export const fetchWeatherForecastFailure = error => ({
  type: FETCH_WEATHER_FORECAST_FAILURE,
  payload: error,
  error: true
})

// 异步获取天气预报数据
export const fetchWeatherForecast = (cityId, parentCityId) => {
  return (dispatch, getState) => {
    // 自定义dispatch使其可以抛弃旧的异步获取的天气预报数据，只显示最新的数据
    const currentFetchWeatherForecastId = ++nextFetchWeatherForecastId

    const dispatchIfValid = action => {
      if (currentFetchWeatherForecastId === nextFetchWeatherForecastId) {
        dispatch(action)
      }
    }

    // 开始获取天气预报数据
    dispatchIfValid(fetchWeatherForecastStart())

    // 发送请求
    fetch(`${WEATHER_FORECAST}&location=${cityId}`)
      .then(response => response.json())
      .then(json => {
        const data = json.HeWeather6[0]

        // 通过城市id无法获取到天气预报信息或响应数据异常
        // 尝试通过父城市id来获取天气预报信息
        if (data.status !== 'ok') {
          return fetch(`${WEATHER_FORECAST}&location=${parentCityId}`)
            .then(response => response.json())
            .then(json => {
              const data = json.HeWeather6[0]

              // 通过父城市id还无法获取天气预报信息或响应数据异常
              if (data.status !== 'ok') {
                throw new Error('fetch weather error')
              }
              return data
            })
        }
        return data
      })
      .then(data => {
        // 提取预测天气数据
        const weatherForecast = data.daily_forecast.map(forecast => ({
          date: forecast.date,
          minTmp: forecast.tmp_min,
          maxTmp: forecast.tmp_max,
          condTextD: forecast.cond_txt_d,
          condTextN: forecast.cond_txt_n,
          condCodeD: forecast.cond_code_d,
          condCodeN: forecast.cond_code_n,
          windDir: forecast.wind_dir,
          windPower: forecast.wind_sc,
          pop: forecast.pop
        }))

        // 成功获取天气预测数据
        dispatchIfValid(fetchWeatherForecastSuccess(weatherForecast))
      })
      .catch(error => {
        console.log(error)

        dispatchIfValid(fetchWeatherForecastFailure(error))
      })
  }
}