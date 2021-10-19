import axios from 'axios';
import { message } from 'antd';

const request = axios.create({
  baseUrl: '/api',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'X-Request-With': 'XMLHttpRequest',
    Authorization: `${localStorage.getItem('TOKEN') || null}`,
    post: { 'Content-Type': 'application/json' },
  },
});

request.interceptors.request.use(
  (config) => {
    console.log(config);

    config.headers.Authorization = `${localStorage.getItem('TOKEN') || null}`;

    if (config.url !== '/backUser/login' && !config.headers.Authorization) {
      message.error('用户未登录！');

      location.href = '/login';
      return;
    }

    return config;
  },
  (error) => {
    message.error('系统错误', error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (res) => {
    console.log('res', res);

    if (typeof res.data !== 'object') {
      message.error('服务端异常');
      return Promise.reject(res);
    }

    return res.data;
  },
  (error) => {
    message.error('系统错误', error);
    return Promise.reject(error);
  },
);

export default request;
