import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import userReducer from './userReducers';

const rootReducer = combineReducers({
  services: serviceReducer,
  currentUser: userReducer,

});

export default rootReducer;
