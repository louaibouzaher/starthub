import React, { useState } from 'react'
import { connect } from 'react-redux'

import UserAvatar from '../assets/images/UserAvatar'
import { sendMessage } from '../store/Messages/messages.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'

const SendMessage = ({ userTo, sendMessage, toggleOverlay, connectedUser }) => {
  const [message, setMessage] = useState({
    message: '',
  })
  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    // sendMessage({
    //   ...message,
    //   time: new Date().toUTCString(),
    //   user: connectedUser,
    // })
    toggleOverlay()
    setMessage({ message: '' })
    // setSubmitted(true)
    // setTimeout(() => {
    //   setSubmitted(false)
    // }, 3000)
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="text-dark opacity-50 text-sm">Sending message to</div>
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={userTo.avatar} size={'20'} />
          <div className="ml-2 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {userTo.firstName} {userTo.lastName}
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
            value={message.message}
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
    sendMessage: () => dispatch(sendMessage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
