import React from 'react'
import { Button } from './Button'
import MainLogo from '../assets/images/MainLogo'
import UserAvatar from '../assets/images/UserAvatar'
import WhiteLogo from '../assets/images/WhiteLogo'
import Messages from '../assets/icons/Messages'
import Notification from '../assets/icons/Notification'

export const Navbar = ({ isConnected, setUserConnected }) => {
  const connectedUser =
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  return (
    <div
      className={
        'z-50 fixed w-full h-24 shadow-sm flex justify-between items-center px-20 py-6 ' +
        (isConnected ? 'bg-purple' : 'bg-white')
      }
    >
      <div onClick={() => setUserConnected(!isConnected)}>
        {isConnected ? <WhiteLogo /> : <MainLogo />}
      </div>
      <div className="flex flex-row ">
        {!isConnected && (
          <>
            <div to="/">
              <Button
                label="Browse"
                goTo={'/'}
                btnStyle={'text-dark mx-2 '}
                onClick={() => setUserConnected(true)}
              />
            </div>
            <div to="/">
              <Button
                label="Login"
                goTo={'/login'}
                btnStyle={'bg-green border-green border-2 text-white shadow-md mx-2 '}
                onClick={() => setUserConnected(true)}
              />
            </div>
            <div to="/">
              <Button
                label="Sign up"
                goTo={'/signup'}
                btnStyle={'bg-white border-2 border-dark text-dark shadow-md mx-2'}
                onClick={() => setUserConnected(true)}
              />
            </div>
          </>
        )}
        {isConnected && (
          <div className="flex flex-row items-center">
            <Messages className="mx-2 scale-125" />
            <Notification className="mx-2 mr-4 scale-125" />
            <UserAvatar link={connectedUser} size={'16'} />
          </div>
        )}
      </div>
    </div>
  )
}
