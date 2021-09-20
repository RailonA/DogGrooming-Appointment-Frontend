import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  service: serviceReducer,
  error: errorReducer,
});

export default rootReducer;
