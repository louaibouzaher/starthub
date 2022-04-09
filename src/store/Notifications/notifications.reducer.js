import { SHOW_NOTIFICATION } from './notifications.types'
import { notify } from '../../helpers/notifications'
const INITIAL_STATE = {
  message: '',
  isSuccess: true,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      notify(action.payload.message, action.payload.isSuccess)
      return { message: action.payload.message, isSuccess: action.payload.isSuccess }
    default:
      return state
  }
}

export default reducer
