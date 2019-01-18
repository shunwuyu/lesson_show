import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import logger from 'redux-logger';

const store = createStore(counter, applyMiddleware(logger));
const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
, rootEl)

render()
store.subscribe(render)