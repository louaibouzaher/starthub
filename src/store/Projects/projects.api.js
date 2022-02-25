import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'

export const postProject = (project) => {
  const req = axios.post(API_BASEURL + 'projects/', project)
  return req
    .then((result) => {
      console.log(result)
      return result.data.id
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}

export const deleteProject = (projectId) => {
  axios
    .delete(API_BASEURL + `projects/${projectId}`)
    .then((result) => {
      console.log(result)
      return result
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
