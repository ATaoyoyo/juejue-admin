import request from './index';

/**
 * 用户登陆
 * @param {string}} username 用户名
 * @param {string} password 用户密码
 * @returns
 */
export const login = (username, password) => {
  return request.post('/backUser/login', { username, password });
};

/**
 * 查询后台用户
 * @returns
 */
export const queryBackUser = () => {
  return request.get('/backUser/queryUser');
};
