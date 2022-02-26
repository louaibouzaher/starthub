import { SEND_MESSAGE } from './messages.types'

export const sendMessage = (newMessage) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  }
}
