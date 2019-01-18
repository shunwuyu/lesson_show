import { createStore, applyMiddleware } from 'redux'

const middlewares = []

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(middlewares));
  return store
}