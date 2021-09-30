import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import userReducer from './userReducers';
import feedbackReducer from './feedbackReducer';

const rootReducer = combineReducers({
  services: serviceReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,

});

export default rootReducer;
