import React, { useState } from 'react'
import { connect } from 'react-redux'
import { API_BASEURL } from '../../appConfig'
import axios from 'axios'

import UserAvatar from '../assets/images/UserAvatar'
import { emailHtmlTemplate, sendEmail } from '../helpers/email'
import store from '../store'
import { showNotification } from '../store/Notifications/notifications.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'

const SendMessage = ({ userTo, toggleOverlay, connectedUser }) => {
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async () => {
    const data = {
      sender: connectedUser.username,
      receiver: userTo.username,
      html: emailHtmlTemplate(message),
    }
    await sendEmail(data)
    toggleOverlay()
    setMessage('')
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="text-dark opacity-50 text-sm">Sending message to</div>
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={userTo.profilePic || userTo.picture} />
          <div className="ml-2 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {userTo.first_name} {userTo.last_name}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-4">
          <textarea
            placeholder="Write your message here"
            style={{
              resize: 'none',
            }}
            className="h-48 border-2 border-dark p-4 rounded-md"
            name="message"
            onChange={handleChange}
            value={message}
          />
        </div>
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Send"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
