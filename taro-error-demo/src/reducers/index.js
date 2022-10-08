import { combineReducers } from 'redux';
import systemInfo from './systemInfo';

export default combineReducers({
  systemInfo
});

export { ACTION_TYPE as SYS_ACTION_TYPE } from './systemInfo';

