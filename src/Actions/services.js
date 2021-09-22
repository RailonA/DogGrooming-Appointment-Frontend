import axios from 'axios';
import { GET_SERVICE_REQUESTS, GET_SERVICE_FAILURE, GET_SERVICE_SUCCESS } from '../Constants/actions';

const fetchServicesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SERVICE_REQUESTS,
    });

    const response = await axios.get('http://localhost:3000/api/v1/services');
    const services = response.data;
    dispatch({
      type: GET_SERVICE_SUCCESS,
      payload: services,
    });
  } catch (error) {
    dispatch({
      type: GET_SERVICE_FAILURE,
      error: error.message,
    });
  }
};

export default fetchServicesAction;
