import { takeLatest } from 'redux-saga/effects';
import { REGISTER_USER } from '../action/users';
import {registerUserAsync} from './users';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
  ]
}