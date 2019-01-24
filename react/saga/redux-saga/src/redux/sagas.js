import { call, put } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import * as actionTypes from './actionTypes.js';
import Api from '../Api';


export function* doLogin(action) {
  try {
    const data = yield call(Api.login);
    console.log(data);
    yield put({type: actionTypes.LOGIN, payload: action.payload});
  } catch (error) {
    // yield put({type})
  }
}

function* watchLogin() {
  yield* takeEvery(actionTypes.LOGIN, doLogin);
}