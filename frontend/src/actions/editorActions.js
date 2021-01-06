import axios from 'axios';
import { BASE_URL } from '../constants/awss3';
import {
  EDITOR_LIST_FAIL,
  EDITOR_LIST_REQUEST,
  EDITOR_LIST_SUCCESS,
} from '../constants/editorConstants';

export const listEditorData = () => async dispatch => {
  try {
    dispatch({ type: EDITOR_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/editor`);

    dispatch({
      type: EDITOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: EDITOR_LIST_FAIL,
      payload: err.response ? JSON.stringify(err.response.data) : err.message,
    });
  }
};
