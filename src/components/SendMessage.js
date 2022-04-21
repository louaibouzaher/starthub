import React, { useState } from 'react'
import { connect } from 'react-redux'
import UserAvatar from '../assets/images/UserAvatar'
import { emailHtmlTemplate, sendEmail } from '../helpers/email'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'
import Link from 'next/link'
const SendMessage = ({ userTo, toggleOverlay, connectedUser, isConnected }) => {
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
      {isConnected ? (
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
      ) : (
        <div>You need to login in order to send messages</div>
      )}
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        {isConnected && (
          <Button
            label="Send"
            btnStyle="bg-purple text-white border-2 border-purple mx-2"
            onClick={handleSubmit}
          />
        )}
        {!isConnected && (
          <Link href="/login" passHref>
            <Button
              label="Login"
              btnStyle="bg-purple text-white border-2 border-purple mx-2"
              onClick={() => toggleOverlay()}
            />
          </Link>
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
    isConnected: state.user.isConnected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage)
