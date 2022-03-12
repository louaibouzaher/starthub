import {
  POSTS_LOADING,
  POSTS_FAILURE,
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST,
  SET_ADD_POST_STATE,
  TOGGLE_ISEDITING,
} from './posts.types'

export const loading = () => {
  return {
    type: POSTS_LOADING,
  }
}
export const failure = (payload) => {
  return {
    type: POSTS_FAILURE,
    payload: payload,
  }
}

export const addPostSuccess = (newPost) => {
  return {
    type: ADD_POST,
    payload: newPost,
  }
}
export const getPostsSuccess = (payload) => {
  return {
    type: GET_POSTS,
    payload: payload,
  }
}

export const deletePostSuccess = (postId) => {
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

export const editPostSuccess = (postId, editedPost) => {
  return {
    type: EDIT_POST,
    id: postId,
    payload: editedPost,
  }
}
