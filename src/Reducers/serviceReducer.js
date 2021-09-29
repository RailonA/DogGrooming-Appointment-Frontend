import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
} from '../Constants/actions';

const initialState = {
  servicesCollection: [],
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES_REQUEST:
      return { ...state, loading: true };
    case GET_SERVICES_SUCCESS:
      return { ...state, servicesCollection: action.payload, loading: false };
    case GET_SERVICES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default serviceReducer;
