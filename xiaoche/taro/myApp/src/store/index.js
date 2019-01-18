import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [
  thunkMiddleware,
  createLogger()
]


export default function congigStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
}
