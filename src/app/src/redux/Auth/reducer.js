import * as CONST from './constant';

const initialState = {
  isLogin: false,
  token: localStorage.getItem('token'),
  userData: {}
};

export default function AuthReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
        userData: action.payload.userData
      };
    case CONST.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        token: '',
        userData: {},
      };
    default:
      return state;
  }
}