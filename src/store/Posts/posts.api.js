import axios from 'axios'
import store from '..'
import { API_BASEURL } from '../../../appConfig'
import {
  failure,
  loading,
  getPostsSuccess,
  deletePostSuccess,
  editPostSuccess,
  addPostSuccess,
} from '../Posts/posts.actions'
import { showNotification } from '../Notifications/notifications.actions'

export const getPosts = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `posts/?space=${store.getState().spaces.currentSpace}`)
      .then((result) => {
        dispatch(getPostsSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
export const postPost = (post) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'posts/', post)
      .then((result) => {
        dispatch(addPostSuccess(result.data))
        dispatch(showNotification('Post Created Successfully ✅', true))
        store.dispatch(getPosts())
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const deletePost = (postId) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .delete(API_BASEURL + `posts/${postId}/`)
      .then((result) => {
        dispatch(deletePostSuccess(result.data))
        store.dispatch(getPosts())
        dispatch(showNotification('Post Deleted Successfully ✅', true))
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const putPost = (postId, editedPost) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `posts/${postId}/`, editedPost)
      .then((result) => {
        dispatch(editPostSuccess(result.data))
        dispatch(showNotification('Post Updated Successfully ✅', true))
        store.dispatch(getPosts())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}
