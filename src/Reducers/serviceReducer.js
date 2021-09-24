import { GET_SERVICES } from '../Constants/actions';

const initialState = {
  servicesCollection: [],
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return { ...state, servicesCollection: action.payload };
    default:
      return state;
  }
};

export default serviceReducer;
