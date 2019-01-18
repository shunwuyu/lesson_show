import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

const reducers = combineReducers({
  films: function(state=[], action) {
    let { type, payload } = action;
    switch(type) {
      case "GET_FILM_DATA":
        return payload;
      default:
        return state;
    }
  }
})

const store  = createStore(reducers, applyMiddleware(ReduxThunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));