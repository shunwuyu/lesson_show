import * as ActionTypes from "./actionTypes";

export function doLogin (userInfo) {
    return {type: ActionTypes.LOGIN, payload: userInfo}
  // return {type: ActionTypes.LOGIN, payload: userInfo}
}