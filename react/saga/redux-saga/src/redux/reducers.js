import { combineReducers } from "redux";
import * as ActionTypes from "./actionTypes";

const initialState = {
  user: {}
};

function userInfo(user= initialState.user, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload
    default:
      return user;
  }
}

const reducer = combineReducers({
  userInfo
})

export default reducer;