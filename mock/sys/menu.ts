import { resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';

const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'PAGE_LAYOUT',
  redirect: '/dashboard/welcome',
  meta: {
    icon: 'ant-design:home-outlined',
    title: 'Dashboard',
  },
  children: [
    {
      path: '/welcome',
      name: 'Welcome',
      component: '/dashboard/welcome/index',
      meta: {
        title: '欢迎页',
        affix: true,
      },
    },
  ],
};

const frontRoute = {
  path: '/front',
  name: 'PermissionFrontDemo',
  meta: {
    title: '基于前端权限',
  },
  children: [
    {
      path: 'page',
      name: 'FrontPageAuth',
      component: '/demo/permission/front/index',
      meta: {
        title: '页面权限',
      },
    },
    {
      path: 'btn',
      name: 'FrontBtnAuth',
      component: '/demo/permission/front/Btn',
      meta: {
        title: '按钮权限',
      },
    },
    {
      path: 'auth-pageA',
      name: 'FrontAuthPageA',
      component: '/demo/permission/front/AuthPageA',
      meta: {
        title: '权限测试页A',
      },
    },
    {
      path: 'auth-pageB',
      name: 'FrontAuthPageB',
      component: '/demo/permission/front/AuthPageB',
      meta: {
        title: '权限测试页B',
      },
    },
  ],
};
const backRoute = {
  path: '/back',
  name: 'PermissionBackDemo',
  meta: {
    title: '基于后台权限',
  },
  children: [
    {
      path: 'page',
      name: 'BackAuthPage',
      component: '/demo/permission/back/index',
      meta: {
        title: '页面权限',
      },
    },
    {
      path: 'btn',
      name: 'BackAuthBtn',
      component: '/demo/permission/back/Btn',
      meta: {
        title: '按钮权限',
      },
    },
  ],
};
const authRoute = {
  path: '/permission',
  name: 'Permission',
  component: 'PAGE_LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'ant-design:home-outlined',
    title: '权限管理',
  },
  children: [frontRoute, backRoute],
};

const authRoute1 = {
  path: '/permission',
  name: 'Permission',
  component: 'PAGE_LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    icon: 'ant-design:home-outlined',
    title: '权限管理',
  },
  children: [backRoute],
};
const backRoute2 = {
  path: '/index',
  name: 'Home',
  component: '/home/index',
  meta: {
    icon: 'ant-design:home-outlined',
    title: 'home.index.home',
  },
};
const authRoute2 = {
  path: '/home',
  name: 'Home',
  component: 'PAGE_FRONT_LAYOUT',
  redirect: '/home/index',
  children: [backRoute2],
};

export default [
  {
    url: '/api/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      if (!id || id === '1') {
        return resultSuccess([dashboardRoute, authRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, authRoute1]);
      }
      if (id === '3') {
        return resultSuccess([authRoute2]);
      }
    },
  },
] as MockMethod[];
