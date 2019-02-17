import React from "react";
import ReactDOM from "react-dom";
import Instagram from './src/pages/index';
import store from './src/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Instagram />
  </Provider>,
  document.getElementById('root')
);