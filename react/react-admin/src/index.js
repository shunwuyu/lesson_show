import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import App from './App';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import Page from './Page';

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <Page />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
