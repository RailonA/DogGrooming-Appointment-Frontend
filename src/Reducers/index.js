import { combineReducers } from 'redux';
import serviceReducer from './serviceReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({ serviceReducer, errorReducer });

export default rootReducer;
