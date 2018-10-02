import {
  FETCH_LOCATION_BY_INPUT_START,
  FETCH_LOCATION_BY_INPUT_SUCCESS,
  FETCH_LOCATION_BY_INPUT_FAILURE
} from './actionTypes'

export default (state = { status: 'init' }, action) => {
  const payload = action.payload
  switch (action.type) {
    case FETCH_LOCATION_BY_INPUT_START:
      return { status: 'start' }
    case FETCH_LOCATION_BY_INPUT_SUCCESS:
      return {
        status: 'success',
        ...payload
      }
    case FETCH_LOCATION_BY_INPUT_FAILURE:
      return { status: 'failure' }
    default:
      return state
  }
}