import { userStore } from '/@/store/modules/user';
import { TokenModel } from '/@/api/sys/model/userModel';

/**
 * @description:  Get token
 * @return jwt token
 */
export function getToken(): TokenModel {
  return userStore.getTokenState;
}
