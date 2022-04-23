import axios from 'axios'
import store from '../store/index'
import { showNotification } from '../store/Notifications/notifications.actions'
import { logout } from '../store/User/user.actions'
import { refreshToken } from '../store/User/user.api'
export const destroyToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
}

export const setTokenLocalStorage = (data) => {
  localStorage.setItem('token', data.access)
  localStorage.setItem('refreshToken', data.refresh)
}

export const setAxiosAuthHeader = (headers = {}) => {
  axios.defaults.headers.common = { ...headers }
}

axios.interceptors.request.use(
  (config) => {
    if (
      !config.url.endsWith('/auth/login/refresh/') &&
      !config.url.endsWith('/auth/register/')
    ) {
      store.dispatch(refreshToken(store.getState().user.data.token))
    }
    return config
  },
  (error) => {
    console.log(error)
  }
)
axios.interceptors.response.use(
  (response) => {
    try {
      return response
    } catch (error) {
      console.log(`error ${error}`)
    }
  },
  (error) => {
    if (error.response?.status == 401) {
      store.dispatch(showNotification('Session Expired: Log in again.'))
      store.dispatch(logout())
    }
  }
)
