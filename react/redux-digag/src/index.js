import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'element-theme-default';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
