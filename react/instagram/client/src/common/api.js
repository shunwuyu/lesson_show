import instance from './axiosInstance.js'

exports.login = (data) => {
  return instance.post('/login', data);
}

exports.getUserInfo = (data) => {
  return instance.get('/user/info', data);
}

exports.signout = () => {
  return instance.get('/login/signout');
}

exports.frindList = () => {
  return instance.get('/friend/list');
}

exports.followUser =  (data) => {
  return instance.post('/friend/follow', data);
}

exports.friendTopicList = () => {
  return instance.get('/topic/friend/list');
}

exports.addDiscuss = (data) => {
  return instance.post("/topic/discuss/add", data);
}

exports.topicLike = (data) => {
  return instance.post('/topic/like', data);
}

exports.getToken = () => {
  return instance.get('/handle/upload/get-token');
}

exports.addTopic = (data) => {
  return instance.post('/topic/add', data);
}