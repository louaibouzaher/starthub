import {
  LOADING,
  FAILURE,
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  GET_CURRENT_USER_SUCCESS,
} from './user.types'

export const loading = () => {
  return {
    type: LOADING,
  }
}
export const failure = (payload) => {
  return {
    type: FAILURE,
    payload: payload,
  }
}
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  }
}
export const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload,
  }
}

export const getCurrentUserSuccess = (payload) => {
  return { type: GET_CURRENT_USER_SUCCESS, payload: payload }
}
export const getProfileSuccess = (payload) => {
  return { type: GET_PROFILE_SUCCESS, payload: payload }
}
