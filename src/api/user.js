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
export const queryBackUser = (params) => {
  return request.get('/backUser/queryUser', { params: params });
};

/**
 * 更改用户状态
 * @param {string} id 用户id
 * @returns
 */
export const stopOrStartUser = (id, used) => {
  return request.put('/backUser/change', { id, used });
};

/**
 * 创建后台用户
 * @param {object} params 用户参数
 * @returns
 */
export const registerUser = (params) => {
  return request.post('/backUser/register', params);
};

/**
 * 更新用户
 * @param {object} params 用户信息
 * @returns
 */
export const updateUser = (params) => {
  return request.post('/backUser/update', params);
};
