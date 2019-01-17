// module.exports =  (state = 10, action) => {
export default (state = 10, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}