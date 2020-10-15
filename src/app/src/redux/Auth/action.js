import * as CONST from './constant';

export const login = (token, userData) => ({
  type: CONST.LOGIN_SUCCESS,
  payload: {
    token,
    userData
  },
});

export const logout = () => ({
  type: CONST.LOGOUT_SUCCESS,
});