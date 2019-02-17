import instance from './axiosInstance.js';

exports.getUserInfo = (data) => {
  return instance.get('/user/info', data);
}

exports.updatePersonalInfo = (data) => {
  return instance.post('/user/update', data);
}


exports.login = (data) => {
  return instance.post('/login', data);
}

exports.friendList = (data) => {
  return instance.get('/friend/list', data);
} 

