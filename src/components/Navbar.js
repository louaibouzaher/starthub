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

const Navbar = ({ connectedUser }) => {
  console.log(connectedUser)
  const isConnected = connectedUser.id != null
  useEffect(() => {
    store.dispatch(getProfile(connectedUser.id))
  }, [connectedUser.id])

  return (
    <div
      className={
        'z-50 fixed w-full h-16 shadow-lg flex justify-between items-center px-20 py-6 ' +
        (isConnected ? 'bg-purple' : 'bg-white')
      }
    >
      <Link href="/" passHref className="cursor-pointer">
        <div className="cursor-pointer">{isConnected ? <WhiteLogo /> : <MainLogo />}</div>
      </Link>

      <div className="flex flex-row ">
        {!isConnected && (
          <>
            <Link href="/browse" passHref>
              <Button
                label="Browse"
                btnStyle={'text-dark mx-2 '}
                onClick={() => {
                  console.log('Browse')
                }}
              />
            </Link>
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
            <Messages className="mx-3" />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
