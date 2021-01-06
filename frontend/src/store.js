import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  archSkillsListReducer,
  mechanicsListReducer,
  archSkillsDetailsReducer,
  archSkillDetailsReducer,
  skillDetailsReducer,
  runestonesListReducer,
  runetraitsListReducer,
  runetraitsDetailsReducer,
  sephirotListReducer,
} from './reducer/skillsReducers';
import { userLoginReducer } from './reducer/userReducers';
import { editorListReducer } from './reducer/editorReducers';
import { loadState } from './localStorage';
import { reportBugReducer } from './reducer/reportBugReducers';

const reducer = combineReducers({
  archSkillsList: archSkillsListReducer,
  mechanicsList: mechanicsListReducer,
  runestonesList: runestonesListReducer,
  runetraitList: runetraitsListReducer,
  runetraitDetails: runetraitsDetailsReducer,
  sephirotList: sephirotListReducer,
  archSkillsDetails: archSkillsDetailsReducer,
  archSkillDetails: archSkillDetailsReducer,
  skillDetails: skillDetailsReducer,
  userLogin: userLoginReducer,
  editorList: editorListReducer,
  reportBugRes: reportBugReducer,
});

const userInfoFromStorage = loadState('userInfo');
// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
