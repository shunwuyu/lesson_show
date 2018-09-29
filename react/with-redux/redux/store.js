import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const reducers = {
  global: reducer
};

export const store = createStore(combineReducers(reducers), applyMiddleware(...[thunk]));

export function registerReducer(key, reducer) {
  reducers[key] = reducer;
  store.replaceReducer(combineReducers(reducers));
}
