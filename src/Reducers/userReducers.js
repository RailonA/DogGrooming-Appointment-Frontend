import {
  LOGIN,
  LOGOUT,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from '../Constants/actions';

const initialState = {
  id: null,
  username: null,
  token: null,
  appointments: [],
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.auth_token,
        username: action.payload.username,
        id: action.payload.id,
      };
    case LOGOUT:
      return {
        ...state,
        username: null,
        token: null,
        id: null,
        appointments: [],
      };
    case GET_USER_INFO_REQUEST:
      return { ...state, loading: true };
    case GET_USER_INFO_SUCCESS:
      return { ...state, appointments: action.payload.appointments, loading: false };
    case GET_USER_INFO_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
