import Link from 'next/link'

import { Button } from './Button'
import MainLogo from '../assets/images/MainLogo'
import UserAvatar from '../assets/images/UserAvatar'
import WhiteLogo from '../assets/images/WhiteLogo'
import Messages from '../assets/icons/Messages'
import Notification from '../assets/icons/Notification'

export const Navbar = ({ isConnected, connectedUser }) => {
  return (
    <div
      className={
        'z-50 fixed w-full h-24 shadow-sm flex justify-between items-center px-20 py-6 ' +
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
                action={() => console.log('Browse')}
              />
            </Link>
            <Link href="/login" passHref>
              <Button
                label="Login"
                btnStyle={'bg-green border-green border-2 text-white shadow-md mx-2 '}
                action={() => console.log('Login')}
              />
            </Link>
            <Link href="/signup" passHref>
              <Button
                label="Sign up"
                btnStyle={'bg-white border-2 border-dark text-dark shadow-md mx-2'}
                action={() => console.log('Sign Up')}
              />
            </Link>
          </>
        )}
        {isConnected && (
          <div className="flex flex-row items-center">
            <Messages className="mx-3 scale-125" />
            <Notification className="mx-3 mr-10 scale-125" />
            <UserAvatar link={connectedUser.picture} size={'16'} />
          </div>
        )}
      </div>
    </div>
  )
}
