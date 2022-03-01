import { login, signup } from './user.api'
import { LOGIN, SIGNUP } from './user.types'

const INITIAL_STATE = {
  connectedUser: {},
  token: {
    access: null,
    refresh: null,
  },
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      const token = {}
      login(action.payload).then((r) => {
        token.refresh = r.data.refresh
        token.access = r.data.access
        if (r.status == 200) {
          action.cb()
        }
        return { ...state, token: token }
      })
      return { ...state, token: token }
      break
    case SIGNUP:
      signup(action.payload).then((r) => {
        if (r.status == 201) {
          action.cb()
        }
        console.log(r)
      })
      return state

    default:
      return state
  }
}

export default reducer
