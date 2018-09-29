import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as locationByIp } from './weatherLocation'
import { reducer as locationByInput } from './locationInput'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  locationByIp,
  locationByInput
});

const initialState = {}
const middlewares = [thunk]
// 依次执行
// const composedEnhancers = compose(applyMiddleware(...middlewares))
export default createStore(reducer, initialState, applyMiddleware(...middlewares))