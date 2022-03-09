import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import { failure, loading, getPostsSuccess } from '../Posts/posts.actions'

export const getPosts = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `posts/`)
      .then((result) => {
        console.log(result)
        dispatch(getPostsSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
        throw error
      })
  }
}
export const postPost = (post) => {
  const req = axios.post(API_BASEURL + 'posts/', post)
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

export const deletePost = (postId) => {
  axios
    .delete(API_BASEURL + `posts/${postId}/`)
    .then((result) => {
      console.log(result)
      return result
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}

export const putPost = (postId, editedPost) => {
  axios
    .put(API_BASEURL + `posts/${postId}/`, editedPost)
    .then((result) => {
      console.log(result)
      return result
    })
    .catch((error) => {
      console.error(error)
      throw error
    })
}
