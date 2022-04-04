import axios from 'axios'
import store from '..'
import { API_BASEURL } from '../../../appConfig'
import {
  failure,
  loading,
  getProjectsSuccess,
  deleteProjectSuccess,
  editProjectSuccess,
  addProjectSuccess,
} from '../Projects/projects.actions'

export const getProjects = (queryParams = {}) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `projects/`, {
        params: queryParams,
      })
      .then((result) => {
        console.log(result)
        dispatch(getProjectsSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
export const postProject = (project) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'projects/', project)
      .then((result) => {
        dispatch(addProjectSuccess(result.data))
        dispatch(showNotification('Project Created Successfully ✅', true))
        store.dispatch(getProjects())
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}

export const deleteProject = (projectId) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .delete(API_BASEURL + `projects/${projectId}/`)
      .then((result) => {
        dispatch(deleteProjectSuccess(result.data))
        dispatch(showNotification('Project Deleted Successfully ✅', true))
        store.dispatch(getProjects())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}

export const putProject = (projectId, editedProject) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `projects/${projectId}/`, editedProject)
      .then((result) => {
        dispatch(editProjectSuccess(result.data))
        dispatch(showNotification('Project Updated Successfully ✅', true))
        store.dispatch(getProjects())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
