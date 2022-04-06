import axios from 'axios'

export const destroyToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
}

export const setTokenLocalStorage = (data) => {
  localStorage.setItem('token', data.access)
  localStorage.setItem('refreshToken', data.refresh)
}

export const setAxiosAuthHeader = (accessToken) => {
  axios.defaults.headers.common = { Authorization: `Bearer ${accessToken}` }
}
