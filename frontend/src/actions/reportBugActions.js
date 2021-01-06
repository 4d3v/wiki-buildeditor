import axios from 'axios';
import { BASE_URL } from '../constants/awss3';
import {
  REPORT_BUG_FAIL,
  REPORT_BUG_SUCCESS,
  REPORT_BUG_REQUEST,
} from '../constants/reportBugConstants';

export const reportBug = reportBugDto => async dispatch => {
  try {
    dispatch({
      type: REPORT_BUG_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}/v1/users/reportbug`,
      reportBugDto,
      config
    );

    dispatch({
      type: REPORT_BUG_SUCCESS,
      payload: data,
    });
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
      type: REPORT_BUG_FAIL,
      payload: errOutput,
    });
  }
};
