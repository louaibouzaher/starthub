import {
  REVIEWS_LOADING,
  REVIEWS_FAILURE,
  ADD_REVIEW,
  GET_REVIEWS,
  DELETE_REVIEW,
  EDIT_REVIEW,
  SET_ADD_REVIEW_STATE,
  TOGGLE_ISEDITING,
} from './reviews.types'

export const loading = () => {
  return {
    type: REVIEWS_LOADING,
  }
}
export const failure = (payload) => {
  return {
    type: REVIEWS_FAILURE,
    payload: payload,
  }
}

export const addReviewSuccess = (newReview) => {
  return {
    type: ADD_REVIEW,
    payload: newReview,
  }
}
export const getReviewsSuccess = (payload) => {
  return {
    type: GET_REVIEWS,
    payload: payload,
  }
}

export const deleteReviewSuccess = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    id: reviewId,
  }
}

export const setAddReviewState = (review) => {
  return {
    type: SET_ADD_REVIEW_STATE,
    payload: review,
  }
}

export const toggleIsEditing = () => {
  return {
    type: TOGGLE_ISEDITING,
  }
}

export const editReviewSuccess = (reviewId, editedReview) => {
  return {
    type: EDIT_REVIEW,
    id: reviewId,
    payload: editedReview,
  }
}
