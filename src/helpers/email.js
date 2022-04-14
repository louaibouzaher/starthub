import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import store from '../store'
import { showNotification } from '../store/Notifications/notifications.actions'
export const emailHtmlTemplate = (content) => {
  return `
<h2>
${content}
</h2>
<div>
${content}
</div>`
}

export const sendEmail = async (data) => {
  await axios
    .post(API_BASEURL + 'messages/', data)
    .then((res) => {
      console.log(res)
      store.dispatch(showNotification('Message Successfuly Sent.', true))
    })
    .catch((e) => {
      console.log(e)
      store.dispatch(showNotification('Message was not delivered.', false))
    })
}
