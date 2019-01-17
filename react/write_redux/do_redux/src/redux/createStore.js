export const createStore = (state, storeChange) => {
  const listeners = [];
  let store = state || {};
  const subscribe = (listen) => listeners.push(listen);
  const dispatch = (action) => {
    const newStore = storeChange(store, action);
    listeners.forEach(item => {
      item(newStore, store);
    })
    store = newStore; 
  };
  return { store, dispatch, subscribe }
}
