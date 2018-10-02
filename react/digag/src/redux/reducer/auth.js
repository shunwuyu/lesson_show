import Immutable from 'immutable';
import {LOGIN_USER} from '../action/users';

const initialState = Immutable.fromJS({
  token: null,
  error: null,
  user: null
});

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_USER:
      return state.merge({
        'user': action.data,
        'error': null,
        'token': null,
      });
    default:
      break;
  }
}