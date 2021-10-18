import { defineConfig } from 'umi';

import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: { title: '管理系统', exclude: '/login' },
  routes: routes,
  fastRefresh: {},
});
