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
    if (!config.url.endsWith('/auth/login/refresh/')) {
      store.dispatch(refreshToken(store.getState().user.data.token))
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
axios.interceptors.response.use(
  (res) => {
    try {
      if (res?.status == 401) {
        store.dispatch(showNotification('Error: Log in again.'))
        store.dispatch(logout())
      }
      return res
    } catch (error) {
      return {}
    }
  },
  (error) => {
    Promise.reject(error)
  }
)
