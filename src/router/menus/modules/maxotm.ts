import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const maxotm: MenuModule = {
  orderNo: 1,
  menu: {
    name: t('routes.maxotm.maxotm'),
    path: '/maxotm',
    children: [
      {
        path: '/index',
        name: t('routes.maxotm.index'),
      },
      {
        path: '/menu',
        name: t('routes.maxotm.menu'),
      },
    ],
  },
};
export default maxotm;
