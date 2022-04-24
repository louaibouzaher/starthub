import {
  ADD_REVIEW,
  GET_REVIEWS,
  DELETE_REVIEW,
  EDIT_REVIEW,
  SET_ADD_REVIEW_STATE,
  TOGGLE_ISEDITING,
  REVIEWS_LOADING,
  REVIEWS_FAILURE,
} from './reviews.types'

const INITIAL_STATE = {
  loading: false,
  error: false,
  isEditing: false,
  addReviewState: {
    criteriaOne: 0,
    criteriaTwo: 0,
    criteriaThree: 0,
    criteriaFour: 0,
    criteriaFive: 0,
  },
  list: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REVIEWS_LOADING:
      return { ...state, loading: true }
    case REVIEWS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case TOGGLE_ISEDITING:
      return { ...state, isEditing: !state.isEditing }
    case SET_ADD_REVIEW_STATE:
      return { ...state, addReviewState: action.payload }
    case GET_REVIEWS:
      return { ...state, loading: false, list: action.payload }
    case ADD_REVIEW:
      return state
    case DELETE_REVIEW:
      return { ...state, list: state.list.filter((p) => p.id !== action.id) }
    case EDIT_REVIEW:
      return state
    default:
      return state
  }
}

export default reducer
