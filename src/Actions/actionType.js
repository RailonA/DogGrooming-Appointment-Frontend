import axios from 'axios';

export const fetcServiceyRequest = () => ({
  type: 'FETCH_SERVICE_REQUEST',
});

export const fetchServiceSuccess = (data) => ({
  type: 'FETCH_SERVICE_SUCCESS',
  data,
});

export const fetchServiceFailure = (error) => ({
  type: 'FETCH_SERVICE_FAILURE',
  error,
});

export const fetchService = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/services');
    console.log(response);
    const services = await response.data;
    dispatch(fetchServiceSuccess(services));
  } catch (error) {
    return error.message;
  }
  return null;
};
