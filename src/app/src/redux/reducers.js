import { combineReducers } from 'redux';
import dashboardReducer from './Dashboard/reducer';
import authReducer from './Auth/reducer'

const reducers = combineReducers({
  dashboardReducer,
  authReducer,
});

export default reducers;
