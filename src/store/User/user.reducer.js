import {
  GET_CURRENT_USER_SUCCESS,
  GET_PROFILE_SUCCESS,
  PUT_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  FAILURE,
  LOADING,
  SIGNUP_SUCCESS,
  SET_SETTINGS_STATE,
} from './user.types'

const INITIAL_STATE = {
  loading: true,
  data: {
    settingsState: {},
    connectedUser: {},
    token: {
      access: null,
      refresh: null,
    },
  },
  error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: { token: action.payload }, error: '' }
    case FAILURE:
      return { ...state, loading: false, error: action.payload }
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          connectedUser: {
            ...action.payload,
            firstName: action.payload.first_name,
            lastName: action.payload.last_name,
          },
          settingsState: {
            ...action.payload,
            firstName: action.payload.first_name,
            lastName: action.payload.last_name,
          },
        },
        error: '',
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          connectedUser: {
            ...state.data.connectedUser,
            ...action.payload,
            picture: action.payload.profilePic,
            twitterUrl: action.payload.twitter_url,
            linkedInUrl: action.payload.linkedin_url,
            websiteUrl: action.payload.website_url,
          },
          settingsState: {
            ...state.data.connectedUser,
            ...action.payload,
            picture: action.payload.profilePic,
            twitterUrl: action.payload.twitter_url,
            linkedInUrl: action.payload.linkedin_url,
            websiteUrl: action.payload.website_url,
          },
        },
        error: '',
      }
    case PUT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          connectedUser: {
            ...state.data.connectedUser,
            ...action.payload,
            picture: action.payload.profilePic,
            twitterUrl: action.payload.twitter_url,
            linkedInUrl: action.payload.linkedin_url,
            websiteUrl: action.payload.website_url,
          },
          settingsState: {
            ...state.data.connectedUser,
            ...action.payload,
            picture: action.payload.profilePic,
            twitterUrl: action.payload.twitter_url,
            linkedInUrl: action.payload.linkedin_url,
            websiteUrl: action.payload.website_url,
          },
        },
        error: '',
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case SET_SETTINGS_STATE:
      return { ...state, data: { ...state.data, settingsState: action.payload } }
    default:
      return state
  }
}

export default reducer
