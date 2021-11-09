import {
  GET_APPOINTMENTS_REQUEST,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_FAILURE,
} from '../Constants/actions';

const initialState = {
  appointmentsCollection: [],
};

const apponintmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS_REQUEST:
      return { ...state, loading: true };
    case GET_APPOINTMENTS_SUCCESS:
      return { ...state, appointmentsCollection: action.payload, loading: false };
    case GET_APPOINTMENTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default apponintmentReducer;
