import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import Page from './Page';
import reducer from './reducer';
import './index.css';

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
  <AppContainer>
      <Provider store={store}>
          <Page store={store} />
      </Provider>
  </AppContainer>
,
document.getElementById('root')
);