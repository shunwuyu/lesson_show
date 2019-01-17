import axios from 'axios';
exports.friendList = (data) => {
  return instance.get('http://localhost:7001/friend/list', data);
} 