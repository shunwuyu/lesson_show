import axios from 'axios';
import baseDomain from './config.js'
import { notification } from 'antd';


const instance = axios.create({
  //当创建实例的时候配置默认配置
  xsrfCookieName: 'xsrf-token',
  baseURL: baseDomain
});

instance.interceptors.response.use(function(response) {
  if (response.data.success) {
    return Promise.resolve(response.data);
  } else {
    notification['error']({
      message: response.data.message
    })
    return Promise.reject({
      message: response.data.message
    })
  }
}, function(error) {
  try {
    if (error.response.status === 401) {
      setTimeout(() => {
        window.location.href = '/login'
      }, 2000);
    }
  } catch(err) {
    notification['error']({
      message: '系统异常，请稍后重试！'
    })
  }
  return Promise.reject({
    messageCode: 'sysError'
  });
})

export default instance;
