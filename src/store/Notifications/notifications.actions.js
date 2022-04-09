import { SHOW_NOTIFICATION } from './notifications.types'

export const showNotification = (message, isSuccess) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message,
      isSuccess,
    },
  }
}
