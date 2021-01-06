import axios from 'axios';
import { BASE_URL } from '../constants/awss3';
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

export const listArchSkills = () => async dispatch => {
  try {
    dispatch({ type: ARCH_SKILLS_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/archetypes/`);

    dispatch({
      type: ARCH_SKILLS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ARCH_SKILLS_LIST_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listMechanics = () => async dispatch => {
  try {
    dispatch({ type: MECHANICS_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/mechanics/`);

    dispatch({
      type: MECHANICS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MECHANICS_LIST_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listRunestones = () => async dispatch => {
  try {
    dispatch({ type: RUNESTONES_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/runestones/`);

    dispatch({
      type: RUNESTONES_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RUNESTONES_LIST_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listRunetraits = () => async dispatch => {
  try {
    dispatch({ type: RUNETRAITS_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/runetraits/`);

    dispatch({
      type: RUNETRAITS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RUNETRAITS_LIST_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listRunetraitDetails = runetrait => async dispatch => {
  try {
    dispatch({ type: RUNETRAITS_DETAILS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/runetraits/${runetrait}`);

    dispatch({
      type: RUNETRAITS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: RUNETRAITS_DETAILS_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listSephirots = () => async dispatch => {
  try {
    dispatch({ type: SEPHIROT_LIST_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/sephirots/`);

    dispatch({
      type: SEPHIROT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SEPHIROT_LIST_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listArchSkillsDetails = archetype => async dispatch => {
  try {
    dispatch({ type: ARCH_SKILLS_DETAILS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/archetypes/${archetype}`);

    dispatch({
      type: ARCH_SKILLS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ARCH_SKILLS_DETAILS_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listArchSkillDetails = skill => async dispatch => {
  try {
    dispatch({ type: ARCH_SKILL_DETAILS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/skills/${skill}/`);

    dispatch({
      type: ARCH_SKILL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ARCH_SKILL_DETAILS_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};

export const listSkillDetails = id => async dispatch => {
  try {
    dispatch({ type: SKILL_DETAILS_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/v1/skills/${id}`);

    dispatch({
      type: SKILL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: SKILL_DETAILS_FAIL,
      payload: err.response.data ? err.response.data : err.message,
    });
  }
};
