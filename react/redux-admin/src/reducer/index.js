import { combineReducers } from 'redux';
import * as type from '../action/type';

const httpData = (state = {}, action) => {
  switch (action.type) {
      case type.RECEIVE_DATA:
      case type.REQUEST_DATA:
          return {
              ...state
          };
      default:
          return {...state};
  }
};

export default combineReducers({
  httpData
});