import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'

export const login = (payload) => {
  try {
    const res = axios.post(API_BASEURL + 'auth/login/', payload)
    return res.then((result) => {
      console.log(result)
      return result
    })
  } catch (e) {
    console.log(e)
  }
}

export const signup = (payload) => {
  try {
    const res = axios.post(API_BASEURL + 'auth/register/', payload)
    return res.then((result) => {
      console.log(result)
      return result
    })
  } catch (e) {
    console.log(e)
  }
}
