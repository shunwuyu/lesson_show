import { state } from './redux/state.js';
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';
const { store, dispatch, subscribe } = createStore(state, storeChange);
  
function renderHead (state){
  console.log('render head');
  const head = document.getElementById('head')
  head.innerText = state.text;
  head.style.color = state.color;
}
function renderBody (state){
  console.log('render body');
  const body = document.getElementById('body')
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp (store, oldStore={}){
  if(store === oldStore) return; 
  store.head !== oldStore.head && renderHead(store.head);  
  store.body !== oldStore.body && renderBody(store.body);  
  console.log('render app',store, oldStore);
}
// 首次渲染
subscribe((store, oldStore) => renderApp(store, oldStore));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是调用 dispatch 修改的 body' });
