import * as type from './type';
import * as http from '../axios/index';

export const  requestData = category => ({
  type: type.REQUEST_DATA,
  category
});

export const receiveData = (data, category) => ({
  type: type.RECEIVE_DATA,
  data,
  category
})


export const fetchData = ({funcName, params, stateName}) => dispatch => {
  !stateName && (stateName = funcName);
  dispatch(requestData(stateName));
  return http[funcName](params).then(res => dispatch(receiveData(res, stateName)));
}