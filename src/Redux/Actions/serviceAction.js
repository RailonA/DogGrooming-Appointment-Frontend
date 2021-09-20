import { FETCH_SERVICE_REQUEST, FETCH_SERVICE_SUCCESS, FETCH_SERVICE_FAILURE } from './actionType';

const fetcServiceyRequest = () => ({
  type: FETCH_SERVICE_REQUEST,
});

const fetchServiceSuccess = (data) => ({
  type: FETCH_SERVICE_SUCCESS,
  data,
});

const fetchServiceFailure = (error) => ({
  type: FETCH_SERVICE_FAILURE,
  error,
});

export default { fetcServiceyRequest, fetchServiceSuccess, fetchServiceFailure };
