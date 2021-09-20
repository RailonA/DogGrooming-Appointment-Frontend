import Axios from 'axios';
import fetchServiceSuccess from '../Redux/Actions/serviceAction';

const fetchService = () => async (dispatch) => {
  try {
    const response = await Axios.get('http://localhost:3000/api/v1/services');
    const service = await response.data;
    dispatch(fetchServiceSuccess(service));
  } catch (error) {
    return error.message;
  }
  return null;
};

export default fetchService;
