import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import {
  getCurrentUserSuccess,
  getProfileSuccess,
  putProfileSuccess,
  failure,
  loading,
  loginSuccess,
  signupSuccess,
  refreshTokenSuccess,
} from './user.actions'

export const login = (payload) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'auth/login/', payload)
      .then((result) => {
        dispatch(loginSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
      })
  }
}
export const refreshToken = (payload) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'auth/login/refresh/', payload)
      .then((result) => {
        dispatch(refreshTokenSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
      })
  }
}

export const getProfile = (userId) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `profiles/${userId}/`)
      .then((result) => {
        dispatch(getProfileSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
        console.log(e)
      })
  }
}

export const putProfile = (userId, updatedProfile) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `profiles/${userId}/`, {
        ...updatedProfile,
        user: userId,
        profilePic: updatedProfile.picture,
        twitter_url: updatedProfile.twitterUrl,
        linkedin_url: updatedProfile.linkedInUrl,
        website_url: updatedProfile.websiteUrl,
      })
      .then((result) => {
        dispatch(putProfileSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
        console.log(e)
      })
  }
}

export const getCurrentUser = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `auth/current_user/`)
      .then((result) => {
        dispatch(getCurrentUserSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
      })
  }
}

export const signup = (payload) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'auth/register/', payload)
      .then((result) => {
        dispatch(signupSuccess(result.data))
        return result
      })
      .catch((e) => {
        dispatch(failure(e))
      })
  }
}
