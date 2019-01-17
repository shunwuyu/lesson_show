export const storeChange = (store, action) => {
  console.log(action);
  switch (action.type) {
    case 'HEAD':
      return { 
        ...store,  
        head: action.head
      }
    case 'BODY':
      return { 
        ...store,
        body: action.body
      }
    default:
      return { ...store }
  }
}