import {
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  SET_ADD_PROJECT_STATE,
  TOGGLE_ISEDITING,
} from './projects.types'

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

export const addProject = (newProject) => {
  return {
    type: ADD_PROJECT,
    payload: newProject,
  }
}

export const deleteProject = (projectId) => {
  return {
    type: DELETE_PROJECT,
    id: projectId,
  }
}

export const editProject = (projectId, editedProject) => {
  return {
    type: EDIT_PROJECT,
    id: projectId,
    payload: editedProject,
  }
}
