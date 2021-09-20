import {
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
} from '../Actions/actionType';

const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SERVICE_REQUEST: return {
      ...state,
    };
    case FETCH_SERVICE_SUCCESS: return {
      ...state,
      error: {},
    };
    case FETCH_SERVICE_FAILURE: return {
      error: { ...action.payload },
    };
    default: return state;
  }
};

export default errorReducer;
