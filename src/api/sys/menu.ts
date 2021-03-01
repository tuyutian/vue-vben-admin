import { defHttp } from '/@/utils/http/axios';

import {
  getMenuListByIdParams,
  getMenuListByIdParamsResultModel,
  getMenuListByParams,
} from './model/menuModel';

enum Api {
  GetUserMenuList = '/route',
  GetMenuListById = '/route',
}

/**
 * @description: Get user menu based on id
 */
export function getUserMenuList() {
  return defHttp.request<getMenuListByIdParamsResultModel>({
    url: Api.GetUserMenuList,
    method: 'GET',
  });
}

/**
 * @description: Get user menu based on id
 */

export const getMenuListById = (params: getMenuListByIdParams) => {
  return defHttp.get<getMenuListByIdParamsResultModel>({ url: Api.GetMenuListById, params });
};

/**
 * @description: Get user menu based on id and role
 */
export function getMenuListByIdAndRole(params: getMenuListByParams) {
  return defHttp.request<getMenuListByIdParamsResultModel>({
    url: Api.GetMenuListById,
    method: 'GET',
    params,
  });
}
