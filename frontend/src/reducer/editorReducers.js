import {
  EDITOR_LIST_FAIL,
  EDITOR_LIST_REQUEST,
  EDITOR_LIST_SUCCESS,
} from '../constants/editorConstants';

export const editorListReducer = (state = { editor: [] }, action) => {
  switch (action.type) {
    case EDITOR_LIST_REQUEST:
      return { loading: true, editor: [] };
    case EDITOR_LIST_SUCCESS:
      return { loading: false, editor: action.payload };
    case EDITOR_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};
