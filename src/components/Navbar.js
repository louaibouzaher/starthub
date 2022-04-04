import React, { useEffect } from 'react'
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
import { getProfile } from '../store/User/user.api'

const Navbar = ({ connectedUser, isConnected }) => {
  useEffect(() => {
    if (isConnected) {
      store.dispatch(getProfile(connectedUser.id))
    }
  }, [isConnected, connectedUser.id])

  return (
    <div
      className={
        'z-50 fixed w-full h-16 shadow-lg flex justify-between items-center px-20 py-6 font-bold ' +
        (isConnected ? 'bg-purple' : 'bg-white')
      }
    >
      <Link href="/" passHref className="cursor-pointer">
        <div className="cursor-pointer">{isConnected ? <WhiteLogo /> : <MainLogo />}</div>
      </Link>

      <div className="flex flex-row ">
        <Link href="/space" passHref>
          <Button
            label="Spaces"
            btnStyle={isConnected ? 'text-white' : 'text-dark'}
            onClick={() => {
              console.log('Spaces')
            }}
          />
        </Link>
        <Link href="/browse" passHref>
          <Button
            label="Browse"
            btnStyle={isConnected ? 'text-white' : 'text-dark'}
            onClick={() => {
              console.log('Browse')
            }}
          />
        </Link>
        {!isConnected && (
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
        {isConnected && (
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
    token: state.user.data.token,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
