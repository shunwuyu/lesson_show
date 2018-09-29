import {
  FETCH_LOCATION_BY_IP_START,
  FETCH_LOCATION_BY_IP_SUCCESS,
  FETCH_LOCATION_BY_IP_FAILURE
} from './actionTypes'

import { IP_TO_LOCATION, LOCATION_TO_CITY_ID } from '../constants'

import { actions as weatherUpdateActions } from '../weatherUpdate'

import fetchJsonp from 'fetch-jsonp'

let nextFetchLocationByIpId = 0

// fetch location by ip

export const fetchLocationByIpStart = () => ({
  type: FETCH_LOCATION_BY_IP_START
})

export const fetchLocationByIpSuccess = location => ({
  type: FETCH_LOCATION_BY_IP_SUCCESS,
  payload: {
    ...location
  }
})

export const fetchLocationByIpFailure = error => ({
  type: FETCH_LOCATION_BY_IP_FAILURE,
  payload: error,
  error: true
})

// 异步获取位置信息

export const fetchLocationByIp = () => {
  return (dispatch, getState) => {
    // 自定义dispatch使其可以抛弃旧的异步获取的位置信息，只显示最新的异步获取的位置信息
    const currentFetchLocationByIpId = ++nextFetchLocationByIpId
    const dispatchIfValid = action => {
      if (currentFetchLocationByIpId === nextFetchLocationByIpId) {
        dispatch(action)
      }
    }

    // 开始获取位置信息
    dispatchIfValid(fetchLocationByIpStart())

    fetchJsonp(IP_TO_LOCATION)
      .then(response => {
        return response.json()
      })
      .then(json => {
        // 响应数据错误
        if (json.status !== 0) {
          throw new Error('ip to location error')
        }

        // 根据地理位置(经纬度)获取当前位置所在的城市的ID
        const lng = json.result.location.lng
        const lat = json.result.location.lat

        return fetch(`${LOCATION_TO_CITY_ID}&location=${lng},${lat}`)
      })
      .then(response => {
        return response.json()
      })
      .then(json => {
        const data = json.HeWeather6[0]

        // 响应数据错误
        if (data.status !== 'ok') {
          throw new Error('location to city id error')
        }

        // 获取地理位置信息
        const location = {
          cityName: data.basic.location,
          cityId: data.basic.cid,
          parentCityName: data.basic.parent_city
        }

        return location
      })
      .then(location => {
        const { parentCityName } = location
        delete location.parentCityName

        return fetch(`${LOCATION_TO_CITY_ID}&location=${parentCityName}`)
          .then(response => response.json())
          .then(json => {
            const data = json.HeWeather6[0]

            // 响应数据错误
            if (data.status !== 'ok') {
              throw new Error('location to city id error')
            }

            location.parentCityId = data.basic.cid

            // 成功获取位置信息
            dispatchIfValid(fetchLocationByIpSuccess(location))

            // 更新实时天气信息
            dispatchIfValid(
              weatherUpdateActions.fetchRealTimeWeather(
                location.cityId,
                location.parentCityId
              )
            )

            // 更新天气预报信息
            dispatchIfValid(
              weatherUpdateActions.fetchWeatherForecast(
                location.cityId,
                location.parentCityId
              )
            )
          })
      })
      .catch(error => {
        // 控制台显示异常，便于定位异常问题的根源
        console.log(error)

        // 获取位置信息失败
        dispatchIfValid(fetchLocationByIpFailure(error))
      })
  }
}