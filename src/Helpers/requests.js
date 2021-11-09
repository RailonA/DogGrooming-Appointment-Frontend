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
import {
  getAppointmentRequest,
  getAppointmentSuccess,
  getAppointmentFailure,
} from '../Actions/appointments';

import { sendFeedbackAction } from '../Actions/feedback';
import handleError from './handleError';

const requests = {
  users: 'http://localhost:3000/api/v1/users',
  login: 'http://localhost:3000/api/v1/login',
  services: 'http://localhost:3000/api/v1/services',
  appointments: 'http://localhost:3000/api/v1/appointments',
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
    const response = await axios.get('http://localhost:3000/api/v1/services');
    dispatch(getServiceSuccess(response.data));
  } catch (error) {
    dispatch(getServiceFailure);
    handleError(dispatch, 'service', error);
  }
};

export const requestAppointment = async (
  dispatch, userId, serviceId, selectedDate, selectedTime, token,
) => {
  try {
    await axios.post(requests.appointments,
      {
        user_id: userId,
        service_id: serviceId,
        date: selectedDate,
        time: selectedTime,
      },
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully reserved appointment.' }));
  } catch (error) {
    handleError(dispatch, 'appointment', error);
  }
};

export const requestAppointmentInfo = async (dispatch) => {
  try {
    dispatch(getAppointmentRequest());
    const response = await axios.get('http://localhost:3000/api/v1/appointments');
    dispatch(getAppointmentSuccess(response.data));
  } catch (error) {
    dispatch(getAppointmentFailure);
    handleError(dispatch, 'appointment', error);
  }
};
export default requestServiceInfo;
// export default (requestServiceInfo);
