import { createStore, combineReducers } from 'redux'
import * as reducer from '../reducer/users';

const store = createStore(
  combineReducers(reducer)
);

export default store;