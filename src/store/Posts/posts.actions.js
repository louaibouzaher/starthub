import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  SET_ADD_POST_STATE,
  TOGGLE_ISEDITING,
} from './posts.types'

export const addPost = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost,
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    id: postId,
  }
}

export const setAddPostState = (post) => {
  return {
    type: SET_ADD_POST_STATE,
    payload: post,
  }
}

export const toggleIsEditing = () => {
  return {
    type: TOGGLE_ISEDITING,
  }
}

export const editPost = (postId, editedPost) => {
  return {
    type: EDIT_POST,
    id: postId,
    payload: editedPost,
  }
}
