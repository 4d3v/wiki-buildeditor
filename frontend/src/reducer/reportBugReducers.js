import {
  REPORT_BUG_FAIL,
  REPORT_BUG_REQUEST,
  REPORT_BUG_SUCCESS,
} from '../constants/reportBugConstants';

export const reportBugReducer = (state = {}, action) => {
  switch (action.type) {
    case REPORT_BUG_REQUEST:
      return { loading: true };
    case REPORT_BUG_SUCCESS:
      return { loading: false, bugReportResDt: action.payload };
    case REPORT_BUG_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};
