import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  films: function(state=[], action) {
      let {type, payload} = action;
      switch(type) {
          case "GET_FILM_DATA":
              var newS = [...state];
              newS = payload;
              return newS;
          default:
              return state;
      }
  }
})


const store = createStore(reducers, {});

function renderPage() {
  ReactDOM.render (<App store={store} />, document.getElementById('root'));
}
renderPage();
store.subscribe(renderPage)
