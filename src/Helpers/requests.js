import axios from 'axios';
import {
  loginAction,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} from '../Actions/user';
import {
  getServiceRequest,
  getServiceSuccess,
  getServiceFailure,
} from '../Actions/services';

import { sendFeedbackAction } from '../Actions/feedback';
import handleError from './handleError';

const requests = {
  users: 'https://petgroomingservicedatabase.herokuapp.com//api/v1/users',
  login: 'https://petgroomingservicedatabase.herokuapp.com//api/v1/login',
  services: 'https://petgroomingservicedatabase.herokuapp.com//api/v1/services',
  appointments: 'https://petgroomingservicedatabase.herokuapp.com//api/v1/appointments',
};

export const requestUserInfo = async (dispatch, id, token) => {
  try {
    dispatch(getUserInfoRequest());
    const response = await axios.get(`${requests.users}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(getUserInfoFailure());
    handleError(dispatch, 'userInfo', error);
  }
};

export const requestLogin = async (dispatch, username, password) => {
  try {
    const response = await axios.post(requests.login,
      {
        username,
        password,
      });
    if (response.data.auth_token) {
      dispatch(loginAction(response.data));
      requestUserInfo(dispatch, response.data.id, response.data.auth_token);
      dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully logged in.' }));
    }
  } catch (error) {
    handleError(dispatch, 'login', error);
  }
};

export const requestSignup = async (dispatch, username, password, passwordConf) => {
  try {
    await axios.post(requests.users,
      {
        username,
        password,
        password_confirmation: passwordConf,
      });
    sendFeedbackAction({ type: 'success', feedback: 'User successfully created.' });
    requestLogin(dispatch, username, password);
  } catch (error) {
    handleError(dispatch, 'signup', error);
  }
};
const requestServiceInfo = async (dispatch) => {
  try {
    dispatch(getServiceRequest());
    const response = await axios.get('https://petgroomingservicedatabase.herokuapp.com//api/v1/services');
    dispatch(getServiceSuccess(response.data));
    console.log(response);
  } catch (error) {
    dispatch(getServiceFailure);
    handleError(dispatch, 'service', error);
  }
};

export const requestAppointment = async (dispatch, userId, serviceId, selectedDate, token) => {
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
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully reserved trip.' }));
  } catch (error) {
    handleError(dispatch, 'appointment', error);
  }
};

export default requestServiceInfo;
