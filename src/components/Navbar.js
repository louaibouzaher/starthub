import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { Button } from './Button'
import MainLogo from '../assets/images/MainLogo'
import UserAvatar from '../assets/images/UserAvatar'
import WhiteLogo from '../assets/images/WhiteLogo'
import Messages from '../assets/icons/Messages'
import Notification from '../assets/icons/Notification'
import Settings from '../assets/icons/Settings'
import store from '../store'
import { logout } from '../store/User/user.actions'
import { showNotification } from '../store/Notifications/notifications.actions'

const Navbar = ({ connectedUser, isConnected }) => {
  const [connectedStyle, setConnectedStyle] = useState(false)
  useEffect(() => {
    if (isConnected) {
      setConnectedStyle(true)
    } else {
      setConnectedStyle(false)
    }
  }, [isConnected])

  const handleLogout = () => {
    try {
      store.dispatch(logout())
      store.dispatch(showNotification('Logged out Successfully ✅', true))
    } catch (error) {
      store.dispatch(showNotification(error.message, false))
    }
  }

  return (
    <div
      className={
        'z-50 fixed w-full h-16 shadow-lg flex justify-between items-center px-20 py-6 font-bold ' +
        (connectedStyle ? 'bg-purple' : 'bg-white')
      }
    >
      <Link href="/" passHref className="cursor-pointer">
        <div className="cursor-pointer">
          {connectedStyle ? <WhiteLogo /> : <MainLogo />}
        </div>
      </Link>

      <div className="flex flex-row ">
        <Link href="/feed" passHref>
          <Button
            label="Feed"
            btnStyle={connectedStyle ? 'text-white' : 'text-dark'}
            onClick={() => {
              console.log('Feed')
            }}
          />
        </Link>
        <Link href="/competition" passHref>
          <Button
            label="Competitions"
            btnStyle={connectedStyle ? 'text-white' : 'text-dark'}
            onClick={() => {
              console.log('Competitions')
            }}
          />
        </Link>
        {!connectedStyle && (
          <>
            <Link href="/login" passHref>
              <Button
                label="Login"
                btnStyle={'bg-green border-green border-2 text-white shadow-md mx-2 '}
                onClick={() => {
                  console.log('Login')
                }}
              />
            </Link>
            <Link href="/signup" passHref>
              <Button
                label="Sign up"
                btnStyle={'bg-white border-2 border-dark text-dark shadow-md mx-2'}
                onClick={() => {
                  console.log('Signup')
                }}
              />
            </Link>
          </>
        )}
        {connectedStyle && (
          <div className="flex flex-row items-center">
            <Link href="/message" passHref>
              <a>
                <Messages className="mx-3" />
              </a>
            </Link>
            <Notification className="mx-3" />
            <Link href="/settings" passHref>
              <a>
                <Settings className="mx-3 mr-10" />
              </a>
            </Link>
            <Link href={`/profile/${connectedUser.id}`} passHref>
              <a>
                <UserAvatar link={connectedUser.picture} className="cursor-pointer" />
              </a>
            </Link>
            <Link href="/" passHref>
              <Button label="Logout" btnStyle="text-white" onClick={handleLogout} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser || {},
    isConnected: state.user.isConnected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
