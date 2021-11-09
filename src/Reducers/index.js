import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import userReducer from './userReducers';
import feedbackReducer from './feedbackReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  services: serviceReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,
  appointments: appointmentReducer,
});

export default rootReducer;
