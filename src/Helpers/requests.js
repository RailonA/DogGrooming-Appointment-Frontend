import axios from 'axios';
import { loginAction, getUserInfo } from '../Actions/user';
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
    console.log(error);
  }
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
    console.log(error);
  }
};

export const requestUserInfo = async (dispatch, id) => {
  try {
    const response = await axios.get(`${requests.users}/${id}`);
    dispatch(getUserInfo(response.data));
  } catch (error) {
    console.log(error);
  }
};

const requestServiceInfo = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/services');
    const services = response.data;
    dispatch(getServiceInfo(services));
  } catch (error) {
    console.log(error);
  }
};

export const requestAppointment = async (userId, serviceId, selectedDate, token) => {
  try {
    await axios.post(requests.appointments,
      {
        user_id: userId,
        service_id: serviceId,
        date: selectedDate,
      },
      {
        headers: {
          Authorization: token,
        },
      });
  } catch (error) {
    console.log(error);
  }
};

export default requestServiceInfo;
