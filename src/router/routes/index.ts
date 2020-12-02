import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import {
  // DEFAULT_LAYOUT_COMPONENT,
  PAGE_FRONT_LAYOUT_COMPONENT,
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
} from '../constant';
import { genRouteModule } from '/@/utils/helper/routeHelper';
import modules from 'globby!/@/router/routes/modules/**/*.@(ts)';

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  routeModuleList.push(modules[key]);
});

export const asyncRoutes = [
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  ...genRouteModule(routeModuleList),
];

// 主框架根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: PAGE_FRONT_LAYOUT_COMPONENT,
  redirect: '/home',
  meta: {
    title: 'home.index.home',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: 'routes.basic.login',
  },
};

// 基础路由 不用权限
export const basicRoutes = [LoginRoute, RootRoute];
