import { ADD_PROJECT, DELETE_PROJECT } from './projects.types'

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
