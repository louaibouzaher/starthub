import {
  SPACES_FAILURE,
  SPACES_LOADING,
  GET_SPACES,
  ADD_SPACE,
  DELETE_SPACE,
  EDIT_SPACE,
  SET_ADD_SPACE_STATE,
  TOGGLE_ISEDITING,
} from './spaces.types'

const INITIAL_STATE = {
  isEditing: false,
  loading: false,
  addSpaceState: {},
  list: [],
  error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SPACES_LOADING:
      return { ...state, loading: true }
    case SPACES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case TOGGLE_ISEDITING:
      return { ...state, isEditing: !state.isEditing }
    case SET_ADD_SPACE_STATE:
      return { ...state, addSpaceState: action.payload }
    case GET_SPACES:
      return { ...state, loading: false, list: action.payload }
    case ADD_SPACE:
      return state
    case DELETE_SPACE:
      return { ...state, list: state.list.filter((p) => p.id !== action.id) }
    case EDIT_SPACE:
      return state
    default:
      return state
  }
}

export default reducer
