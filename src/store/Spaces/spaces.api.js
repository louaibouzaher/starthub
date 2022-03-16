import axios from 'axios'
import store from '..'
import { API_BASEURL } from '../../../appConfig'
import {
  failure,
  loading,
  getSpacesSuccess,
  deleteSpaceSuccess,
  editSpaceSuccess,
  addSpaceSuccess,
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
export const postSpace = (space) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'spaces/', space)
      .then((result) => {
        dispatch(addSpaceSuccess(result.data))
        store.dispatch(getSpaces())
      })
      .catch((error) => {
        dispatch(failure(error))
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
        store.dispatch(getSpaces())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}

export const putspace = (spaceId, editedSpace) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `spaces/${spaceId}/`, editedSpace)
      .then((result) => {
        dispatch(editSpaceSuccess(result.data))
        store.dispatch(getSpaces())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
