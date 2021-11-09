import {
  GET_APPOINTMENTS_REQUEST,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_FAILURE,
} from '../Constants/actions';

export const getAppointmentRequest = () => ({
  type: GET_APPOINTMENTS_REQUEST,
});

export const getAppointmentSuccess = (data) => ({
  type: GET_APPOINTMENTS_SUCCESS,
  payload: data,
});

export const getAppointmentFailure = () => ({
  type: GET_APPOINTMENTS_FAILURE,
});
