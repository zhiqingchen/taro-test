import Taro from '@tarojs/taro';
import { SYS_ACTION_TYPE } from '@/reducers';

/**
 * 设置系统信息
 */
export const setSystemInfo = () => {
  const systemInfo = Taro.getSystemInfoSync();
  return {
    type: SYS_ACTION_TYPE.SET_SYSTEM_INFO,
    payload: { systemInfo }
  }
};
