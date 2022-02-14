import { ADD_POST, DELETE_POST } from './posts.types'

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
