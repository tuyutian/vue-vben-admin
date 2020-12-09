import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const maxotm: AppRouteModule = {
  path: '/maxotm',
  name: 'Maxotm',
  component: LAYOUT,
  redirect: '/maxotm/index',
  meta: {
    icon: 'bx:bx-home',
    title: t('routes.maxotm.maxotm'),
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('/@/views/front/index.vue'),
      meta: {
        title: t('routes.maxotm.index'),
        // affix: true,
        icon: 'ion:storefront-sharp',
      },
    },
    {
      path: 'menu',
      name: 'menu',
      component: () => import('/@/views/front/FrontMenu.vue'),
      meta: {
        title: t('routes.maxotm.menu'),
        // affix: true,
        icon: 'entypo:text-document',
      },
    },
  ],
};

export default maxotm;
