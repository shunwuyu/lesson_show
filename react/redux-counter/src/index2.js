import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import createStore from './store'
import reducer from './reducers';
const store = createStore(reducer);

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
    onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
  />
, rootEl)

render();
store.subscribe(render);