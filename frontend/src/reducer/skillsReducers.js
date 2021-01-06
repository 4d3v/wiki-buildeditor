import {
  ARCH_SKILLS_DETAILS_FAIL,
  ARCH_SKILLS_DETAILS_REQUEST,
  ARCH_SKILLS_DETAILS_SUCCESS,
  ARCH_SKILLS_LIST_FAIL,
  ARCH_SKILLS_LIST_REQUEST,
  ARCH_SKILLS_LIST_SUCCESS,
  ARCH_SKILL_DETAILS_FAIL,
  ARCH_SKILL_DETAILS_REQUEST,
  ARCH_SKILL_DETAILS_SUCCESS,
  MECHANICS_LIST_FAIL,
  MECHANICS_LIST_REQUEST,
  MECHANICS_LIST_SUCCESS,
  RUNESTONES_LIST_FAIL,
  RUNESTONES_LIST_REQUEST,
  RUNESTONES_LIST_SUCCESS,
  RUNETRAITS_DETAILS_FAIL,
  RUNETRAITS_DETAILS_REQUEST,
  RUNETRAITS_DETAILS_SUCCESS,
  RUNETRAITS_LIST_FAIL,
  RUNETRAITS_LIST_REQUEST,
  RUNETRAITS_LIST_SUCCESS,
  SEPHIROT_LIST_FAIL,
  SEPHIROT_LIST_REQUEST,
  SEPHIROT_LIST_SUCCESS,
  SKILL_DETAILS_FAIL,
  SKILL_DETAILS_REQUEST,
  SKILL_DETAILS_SUCCESS,
} from '../constants/skillsConstants';

export const archSkillsListReducer = (state = { archetypes: [] }, action) => {
  switch (action.type) {
    case ARCH_SKILLS_LIST_REQUEST:
      return { loading: true, archetypes: [] };
    case ARCH_SKILLS_LIST_SUCCESS:
      return { loading: false, archetypes: action.payload };
    case ARCH_SKILLS_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const mechanicsListReducer = (state = { mechanics: [] }, action) => {
  switch (action.type) {
    case MECHANICS_LIST_REQUEST:
      return { loading: true, mechanics: [] };
    case MECHANICS_LIST_SUCCESS:
      return { loading: false, mechanics: action.payload };
    case MECHANICS_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const runestonesListReducer = (state = { runestones: [] }, action) => {
  switch (action.type) {
    case RUNESTONES_LIST_REQUEST:
      return { loading: true, runestones: [] };
    case RUNESTONES_LIST_SUCCESS:
      return { loading: false, runestones: action.payload };
    case RUNESTONES_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const runetraitsListReducer = (state = { runetraits: [] }, action) => {
  switch (action.type) {
    case RUNETRAITS_LIST_REQUEST:
      return { loading: true, runetraits: [] };
    case RUNETRAITS_LIST_SUCCESS:
      return { loading: false, runetraits: action.payload };
    case RUNETRAITS_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const runetraitsDetailsReducer = (state = { runetrait: [] }, action) => {
  switch (action.type) {
    case RUNETRAITS_DETAILS_REQUEST:
      return { loading: true, runetrait: [] };
    case RUNETRAITS_DETAILS_SUCCESS:
      return { loading: false, runetrait: action.payload };
    case RUNETRAITS_DETAILS_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const sephirotListReducer = (state = { sephirots: [] }, action) => {
  switch (action.type) {
    case SEPHIROT_LIST_REQUEST:
      return { loading: true, sephirots: [] };
    case SEPHIROT_LIST_SUCCESS:
      return { loading: false, sephirots: action.payload };
    case SEPHIROT_LIST_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const archSkillsDetailsReducer = (state = { archetype: [] }, action) => {
  switch (action.type) {
    case ARCH_SKILLS_DETAILS_REQUEST:
      return { loading: true, archetype: [] };
    case ARCH_SKILLS_DETAILS_SUCCESS:
      return { loading: false, archetype: action.payload };
    case ARCH_SKILLS_DETAILS_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const archSkillDetailsReducer = (
  state = { details: [], artifacts: [] },
  action
) => {
  switch (action.type) {
    case ARCH_SKILL_DETAILS_REQUEST:
      return { loading: true, skill: [] };
    case ARCH_SKILL_DETAILS_SUCCESS:
      return { loading: false, skill: action.payload };
    case ARCH_SKILL_DETAILS_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};

export const skillDetailsReducer = (
  state = { skill: { artifacts: [], details: [] } },
  action
) => {
  switch (action.type) {
    case SKILL_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SKILL_DETAILS_SUCCESS:
      return { loading: false, skill: action.payload };
    case SKILL_DETAILS_FAIL:
      return { loading: false, err: action.payload };
    default:
      return state;
  }
};
