import {
  FETCH_LOCATION_BY_IP_START,
  FETCH_LOCATION_BY_IP_SUCCESS,
  FETCH_LOCATION_BY_IP_FAILURE
} from './actionTypes'

export default  (state = { status: 'init' }, action) => {
  const payload = action.payload
  switch (action.type) {
    case FETCH_LOCATION_BY_IP_START:
      return { status: 'start' }
    case FETCH_LOCATION_BY_IP_SUCCESS:
      return {
        status: 'success',
        ...payload
      }
    case FETCH_LOCATION_BY_IP_FAILURE:
      return {
        status: 'failure'
      }
    default:
      return state
  }
}