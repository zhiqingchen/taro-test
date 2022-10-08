/** action type */
export const ACTION_TYPE = {
  SET_SYSTEM_INFO: 'SET_SYSTEM_INFO'
}

/** 初始状态 */
const INITIAL_STATE = {
  info: {}
};

const systemInfo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_SYSTEM_INFO: {
      const { systemInfo = {} } = action.payload;
      return {
        ...state,
        info: systemInfo
      };
    }
    default:
      return state;
  }
}

export default systemInfo;

