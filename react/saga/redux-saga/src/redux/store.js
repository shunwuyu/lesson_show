import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './helloSaga'
import reducer from "./reducers"
// console.log(typeof doLogin);

const sagaMiddleware=createSagaMiddleware();

const store = createStore(reducer, 
  applyMiddleware(sagaMiddleware)
  );
sagaMiddleware.run(helloSaga);

export default store;