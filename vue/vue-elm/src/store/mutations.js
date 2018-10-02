import * as types from './mutation-types.js'

export default {
  [types.SAVE_GEOHASH] (state, geohash) {
    state.geohash = geohash
  },
  [types.RECORD_ADDRESS] (state, {latitude, longitude}) {
    state.latitude = latitude;
    state.longitude = longitude;
  }
}
