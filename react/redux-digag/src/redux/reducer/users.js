import Immutable from 'immutable';
import {REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE} from '../action/users';

const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false,
});

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_USER:
      return state.merge({
        'newUser': action.data,
        'savaSuccess': false,
        'error': null
      });
    case REGISTER_USER_SUCCESS:
      return state.set('saveSuccess', action.data);
    default:
      return state
  }
};
