import {
  PROJECTS_FAILURE,
  PROJECTS_LOADING,
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  SET_ADD_PROJECT_STATE,
  TOGGLE_ISEDITING,
} from './projects.types'

const INITIAL_STATE = {
  isEditing: false,
  loading: false,
  addProjectState: {},
  list: [],
  error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECTS_LOADING:
      return { ...state, loading: true }
    case PROJECTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case TOGGLE_ISEDITING:
      return { ...state, isEditing: !state.isEditing }
    case SET_ADD_PROJECT_STATE:
      return { ...state, addProjectState: action.payload }
    case GET_PROJECTS:
      return { ...state, loading: false, list: action.payload }
    case ADD_PROJECT:
      return state
    case DELETE_PROJECT:
      return { ...state, list: state.list.filter((p) => p.id !== action.id) }
    case EDIT_PROJECT:
      return state
    default:
      return state
  }
}

export default reducer
