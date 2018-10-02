import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'; // 支持异步数据流
// action -> reducer 改变只支持同步操作， 
// axios  
import { reducer } from './reducer';
 
const reducers = {
  global: reducer,

};

export const store = createStore(combineReducers(reducers), applyMiddleware(...[thunk]));

export function registerReducer(key, reducer) {
  reducers[key] = reducer;
  store.replaceReducer(combineReducers(reducers));
}
