import { combineReducers } from 'redux';
import dashboardReducer from './Dashboard/reducer';

const rootReducer = combineReducers({
  dashboardReducer,
});

export default rootReducer;
