import { combineReducers } from 'redux'
import userInfo from './userInfo'
import personalInfo from './personalInfo'

export default combineReducers({
  userInfo,
  personalInfo
})