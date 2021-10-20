import { defineConfig } from 'umi';
import path from 'path';

import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: '管理系统',
    navTheme: 'dark',
    primaryColor: '#1890ff',
    layout: 'mix',
    contentWidth: 'Fluid',
    splitMenus: false,
    fixedHeader: true,
    fixSiderbar: true,
  },
  routes: routes,
  fastRefresh: {},
  alias: {
    '@': '/src',
  },
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7002/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
