import {} from './messages.api'
import { SEND_MESSAGE } from './messages.types'

const INITIAL_STATE = {
  list: [],
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = { ...action.payload }
      // postProject(action.payload).then((r) => {
      //   newMessage.id = r
      // })
      return { ...state, list: [newMessage, ...state.list] }

    default:
      return state
  }
}

export default reducer
