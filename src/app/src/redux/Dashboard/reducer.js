/*
 *
 * Dashboard reducers
 *
 */

import * as CONST from './constant';

const initialState = {
  userAcquisition: {},
  courses: [],
};

// function dashboardReducer(action, state = initialState) {
function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.SET_USER_ACQUISITION:
      return {
        ...state,
        userAcquisitionData: action.payload,
      };
    case CONST.SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
}

export default dashboardReducer;
