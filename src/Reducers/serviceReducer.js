import { GET_SERVICE_REQUESTS, GET_SERVICE_SUCCESS, GET_SERVICE_FAILURE } from '../Constants/actions';

const initialState = {
  services: [],
  error: null,
  loading: true,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE_REQUESTS:
      return { ...state, loading: true };
    case GET_SERVICE_SUCCESS:
      return { ...state, services: action.payload, loading: false };
    case GET_SERVICE_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default serviceReducer;
