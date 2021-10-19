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
        icon: 'TeamOutlined',
        component: '@/pages/manage/backUser',
      },
      {
        path: '/user/customer',
        name: '账单用户',
        icon: 'SolutionOutlined',
        component: '@/pages/manage/customer',
      },
    ],
  },
];
