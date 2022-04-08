import axios from 'axios'
import store from '..'
import { API_BASEURL } from '../../../appConfig'
import {
  failure,
  loading,
  getReviewsSuccess,
  deleteReviewSuccess,
  editReviewSuccess,
  addReviewSuccess,
} from '../Reviews/reviews.actions'
import { showNotification } from '../Notifications/notifications.actions'

export const getReviews = () => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .get(API_BASEURL + `space-reviews/`)
      .then((result) => {
        console.log(result)
        dispatch(getReviewsSuccess(result.data))
      })
      .catch((error) => {
        dispatch(failure(error))
      })
  }
}
export const postReview = (review) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .post(API_BASEURL + 'space-reviews/', review)
      .then((result) => {
        dispatch(addReviewSuccess(result.data))
        dispatch(showNotification('Review Created Successfully ✅', true))

        store.dispatch(getReviews())
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const deleteReview = (reviewId) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .delete(API_BASEURL + `space-reviews/${reviewId}/`)
      .then((result) => {
        dispatch(deleteReviewSuccess(result.data))
        store.dispatch(getReviews())
        dispatch(showNotification('Review Deleted Successfully ✅', true))
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}

export const putReview = (reviewId, editedReview) => {
  return function (dispatch) {
    dispatch(loading())
    axios
      .put(API_BASEURL + `space-reviews/${reviewId}/`, editedReview)
      .then((result) => {
        dispatch(editReviewSuccess(result.data))
        dispatch(showNotification('Review Updated Successfully ✅', true))
        store.dispatch(getReviews())
        return result
      })
      .catch((error) => {
        dispatch(failure(error))
        dispatch(showNotification(error.message, false))
      })
  }
}
