import { combineReducers } from 'redux';
import dashboardReducer from './Dashboard/reducer';

const reducers = combineReducers({
  dashboardReducer,
});

export default reducers;
