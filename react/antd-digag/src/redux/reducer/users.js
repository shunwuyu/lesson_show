import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false,
  token: null,
  currentUser: null,
});

export const users = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
};