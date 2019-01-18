import { put, select, call } from 'redux-saga/effects';
import { registerSuccessAction, registerFailureAction } from '../action/users';
import { getUsers } from './selectors';
import { register } from './api';

export function* registerUserAsync () {
  // console.log('async');
  const users = yield select(getUsers);
  // console.log(users);
  const newUser = users.get('newUser');
  // console.log(newUser);
  const json = yield call(register.bind(this, newUser), 'register');
  if (json.success) {
    yield put(registerSuccessAction(true));
  } else {
    yield put(registerFailureAction('注册失败, 用户名或账号失败'))
  }
  yield put(registerSuccessAction(true));
}