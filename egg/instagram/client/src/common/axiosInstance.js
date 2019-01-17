import axios from 'axios';
import baseDomain from './config.js'

const instance = axios.create({
  //当创建实例的时候配置默认配置
  xsrfCookieName: 'xsrf-token',
  baseURL: baseDomain
});


