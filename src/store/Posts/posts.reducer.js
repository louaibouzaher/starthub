import {
  ADD_POST,
  GET_POSTS,
  DELETE_POST,
  EDIT_POST,
  SET_ADD_POST_STATE,
  TOGGLE_ISEDITING,
  POSTS_LOADING,
  POSTS_FAILURE,
} from './posts.types'

const INITIAL_STATE = {
  loading: false,
  error: false,
  isEditing: false,
  addPostState: {
    title: '',
    content: '',
    picture: null,
    file: null,
  },
  list: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_LOADING:
      return { ...state, loading: true }
    case POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case TOGGLE_ISEDITING:
      return { ...state, isEditing: !state.isEditing }
    case SET_ADD_POST_STATE:
      return { ...state, addPostState: action.payload }
    case GET_POSTS:
      return { ...state, loading: false, list: action.payload }
    case ADD_POST:
      return state
    case DELETE_POST:
      return { ...state, list: state.list.filter((p) => p.id !== action.id) }
    case EDIT_POST:
      return state
    default:
      return state
  }
}

export default reducer
