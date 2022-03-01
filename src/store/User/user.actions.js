import { LOGIN, SIGNUP } from './user.types'

export const login = (payload, callback) => {
  return {
    type: LOGIN,
    payload: payload,
    cb: callback,
  }
}
export const signup = (payload, callback) => {
  return {
    type: SIGNUP,
    payload: payload,
    cb: callback,
  }
}
