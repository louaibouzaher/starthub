import UserAvatar from '../../assets/images/UserAvatar'
import Follow from './Follow'
import Link from 'next/link'
import { Button } from '../Button'

const Listing = ({ list, isFollowers, toggleOverlay }) => {
  return (
    <div className="my-3">
      <div className="text-xl text-dark mb-2 font-bold">
        {isFollowers ? 'Followers' : 'Following'}
      </div>
      {list.map((f) => {
        return (
          <div className="flex flex-row w-full items-center mt-2 border-y-2 pt-1 pb-2">
            <Link href={`/profile/${f.profile.user.id}`} passHref>
              <UserAvatar link={f.profile.profilePic} size={'20'} />
            </Link>
            <div className="ml-4 flex flex-col items-start">
              <Link href={`/profile/${f.profile.user.id}`} passHref>
                <div className="hover:text-purple cursor-pointer text-dark font-bold">
                  {' '}
                  {f.profile.user.first_name} {f.profile.user.last_name}
                </div>
              </Link>
              <div className={'text-xs opacity-50'}>{f.profile.position}</div>
            </div>
            <Follow userId={f.profile.user.id} />
          </div>
        )
      })}
      {list.length == 0 && (
        <div className="w-full text-center my-3"> Seems empty here 🤔 </div>
      )}
      <Button
        label="Go Back"
        btnStyle="absolute w-32 border-2 border-dark mx-2 left-10 bottom-10"
        onClick={toggleOverlay}
      />
    </div>
  )
}

export default Listing
