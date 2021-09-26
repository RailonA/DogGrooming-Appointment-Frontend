import axios from 'axios';
import { loginAction } from '../Actions/user';
import getServiceInfo from '../Actions/services';

const requests = {
  users: 'http://localhost:3000/api/v1/users',
  login: 'http://localhost:3000/api/v1/login',
  services: 'http://localhost:3000/api/v1/services',
  appointments: 'http://localhost:3000/api/v1/appointments',
};

export const requestSignup = async (username, password, passwordConf) => {
  try {
    await axios.post(requests.users,
      {
        username,
        password,
        password_confirmation: passwordConf,
      });
  } catch (error) {
    return error.message;
  }
  return null;
};

export const requestLogin = async (dispatch, username, password) => {
  try {
    const response = await axios.post(requests.login,
      {
        username,
        password,
      });
    dispatch(loginAction(response.data));
  } catch (error) {
    return error.message;
  }
  return null;
};

const requestServiceInfo = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/services');
    const services = response.data;
    dispatch(getServiceInfo(services));
  } catch (error) {
    return error.message;
  }
  return null;
};

export const requestAppointment = async (userId, serviceId, date, token) => {
  try {
    await axios.post(requests.appointments,
      {
        user_id: userId,
        service_id: serviceId,
        date,
      },
      {
        headers: {
          Authorization: token,
        },
      });
  } catch (error) {
    return error.message;
  }
  return null;
};

export default requestServiceInfo;
