export const UPDATE_VALUE = 'UPDATE_VALUE';

export function updateValue(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: UPDATE_VALUE,
    payload: value});
    }, 5000)
  }
  // return function(dispatch, getState) {
  //   // console.log(value)
  //   setTimeout()
  //   dispatch({
  //     type: UPDATE_VALUE,
  //     payload: value
  //   })
  // }
}