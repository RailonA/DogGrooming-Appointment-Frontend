import {
  GET_SERVICES_REQUEST,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAILURE,
} from '../Constants/actions';

export const getServiceRequest = () => ({
  type: GET_SERVICES_REQUEST,
});

export const getServiceSuccess = (data) => ({
  type: GET_SERVICES_SUCCESS,
  payload: data,
});

export const getServiceFailure = () => ({
  type: GET_SERVICES_FAILURE,
});
