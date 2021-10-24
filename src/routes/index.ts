export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    layout: false,
    component: '@/pages/login',
  },
  {
    path: '/dashboard',
    name: '监控台',
    icon: 'DashboardOutlined',
    component: '@/pages/dashboard',
  },
  {
    path: '/user',
    name: '用户管理',
    icon: 'SlidersOutlined',
    routes: [
      {
        path: '/user/backUser',
        name: '后台用户',
        component: '@/pages/manage/backUser',
      },
      {
        path: '/user/customer',
        name: '账单用户',
        component: '@/pages/manage/customer',
      },
      {
        path: '/user/register',
        name: '创建账户',
        component: '@/pages/manage/register',
      },
    ],
  },
];
