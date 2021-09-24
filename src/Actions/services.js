import { GET_SERVICES } from '../Constants/actions';

const getServiceInfo = (data) => ({
  type: GET_SERVICES,
  payload: data,
});

export default getServiceInfo;
