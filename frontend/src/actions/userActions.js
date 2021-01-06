import axios from 'axios';
import { BASE_URL } from '../constants/awss3';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from '../constants/userConstants';
import { saveState } from '../localStorage';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/v1/users/login/`,
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    saveState('userInfo', JSON.stringify(data));
  } catch (err) {
    let errOutput = '';
    if (err.response.data.errors) {
      err.response.data.errors.forEach((err, i) => {
        for (const x in err) {
          errOutput = i > 0 ? errOutput + ' | ' + err[x] : errOutput + err[x];
        }
      });
    } else if (err.response.data.message) {
      errOutput = err.response.data.message;
    } else errOutput = err.message;

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: errOutput,
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
