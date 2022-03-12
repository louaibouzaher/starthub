import {
  PROJECTS_LOADING,
  PROJECTS_FAILURE,
  ADD_PROJECT,
  GET_PROJECTS,
  DELETE_PROJECT,
  EDIT_PROJECT,
  SET_ADD_PROJECT_STATE,
  TOGGLE_ISEDITING,
} from './projects.types'

export const loading = () => {
  return {
    type: PROJECTS_LOADING,
  }
}
export const failure = (payload) => {
  return {
    type: PROJECTS_FAILURE,
    payload: payload,
  }
}

export const addProjectSuccess = (newProject) => {
  return {
    type: ADD_PROJECT,
    payload: newProject,
  }
}
export const getProjectsSuccess = (payload) => {
  return {
    type: GET_PROJECTS,
    payload: payload,
  }
}

export const deleteProjectSuccess = (projectId) => {
  return {
    type: DELETE_PROJECT,
    id: projectId,
  }
}

export const setAddProjectState = (project) => {
  return {
    type: SET_ADD_PROJECT_STATE,
    payload: project,
  }
}

export const toggleIsEditing = () => {
  return {
    type: TOGGLE_ISEDITING,
  }
}

export const editProjectSuccess = (projectId, editedProject) => {
  return {
    type: EDIT_PROJECT,
    id: projectId,
    payload: editedProject,
  }
}
