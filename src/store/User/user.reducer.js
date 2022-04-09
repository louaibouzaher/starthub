import {
  destroyToken,
  setAxiosAuthHeader,
  setTokenLocalStorage,
} from '../../helpers/auth'
import {
  GET_CURRENT_USER_SUCCESS,
  GET_PROFILE_SUCCESS,
  PUT_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  FAILURE,
  LOADING,
  SIGNUP_SUCCESS,
  SET_SETTINGS_STATE,
  REFRESH_TOKEN,
  SET_TOKEN,
  LOGOUT,
} from './user.types'

const INITIAL_STATE = {
  loading: false,
  isConnected: false,
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
    case SET_TOKEN:
      setTokenLocalStorage(action.payload)
      setAxiosAuthHeader({ Authorization: `Bearer ${action.payload.access}` })
      return {
        ...state,
        loading: false,
        data: { ...state.data, token: action.payload },
        error: '',
        isConnected: true,
      }
    case LOADING:
      return { ...state, loading: true }
    case LOGOUT:
      destroyToken()
      setAxiosAuthHeader({})
      return { ...INITIAL_STATE }

    case LOGIN_SUCCESS:
      setTokenLocalStorage(action.payload)
      setAxiosAuthHeader({ Authorization: `Bearer ${action.payload.access}` })
      return {
        ...state,
        loading: false,
        data: { ...state.data, token: action.payload },
        error: '',
        isConnected: true,
      }
    case REFRESH_TOKEN:
      setTokenLocalStorage({
        access: action.payload.access,
        refresh: state.data.token.refresh,
      })
      setAxiosAuthHeader({ Authorization: `Bearer ${action.payload.access}` })
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          token: { ...state.data.token, access: action.payload.access },
        },
        error: '',
      }
    case FAILURE:
      return { ...state, loading: false, error: action.payload }
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          connectedUser: {
            ...state.data.connectedUser,
            ...action.payload,
            firstName: action.payload.first_name,
            lastName: action.payload.last_name,
          },
          settingsState: {
            ...state.data.settingsState,
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
