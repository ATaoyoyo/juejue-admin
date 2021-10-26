/**
 * ****************************
 *
 *           账单用户
 *
 * ****************************
 */

import request from './index';

/**
 * 查询用户
 * @param {object} params 用户参数
 * @returns
 */
export const queryUser = (params) => {
  return request.get('/user/query', { params });
};
