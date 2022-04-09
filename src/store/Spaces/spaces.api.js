import axios from 'axios'
import store from '..'
import { API_BASEURL } from '../../../appConfig'
import { showNotification } from '../Notifications/notifications.actions'
import {
  failure,
  loading,
  getSpacesSuccess,
  deleteSpaceSuccess,
  editSpaceSuccess,
  addSpaceSuccess,
  getMySpacesSuccess,
} from '../Spaces/spaces.actions'

export const getSpaces = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `spaces/`)
      .then((result) => {
        console.log(result)
        dispatch(getSpacesSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
export const getMySpaces = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(
        API_BASEURL + `spaces/user-spaces/${store.getState().user.data.connectedUser.id}/`
      )
      .then((result) => {
        console.log(result)
        dispatch(getMySpacesSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
export const postSpace = (space) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'spaces/', space)
      .then((result) => {
        dispatch(addSpaceSuccess(result.data))
        dispatch(showNotification('Space Created Successfully ✅', true))
        store.dispatch(getMySpaces())
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const deleteSpace = (spaceId) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .delete(API_BASEURL + `spaces/${spaceId}/`)
      .then((result) => {
        dispatch(deleteSpaceSuccess(result.data))
        dispatch(showNotification('Space Deleted Successfully ✅', true))
        store.dispatch(getMySpaces())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const putSpace = (spaceId, editedSpace) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `spaces/${spaceId}/`, editedSpace)
      .then((result) => {
        dispatch(editSpaceSuccess(result.data))
        dispatch(showNotification('Space Updated Successfully ✅', true))
        store.dispatch(getMySpaces())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}
