import React from 'react'
import UserAvatar from '../../assets/images/UserAvatar'

export const PublicationComment = ({ user, content }) => {
  return (
    <div className="shadow-md py-3 pr-10 pl-6 my-1 bg-gray-100 rounded-md flex items-center justify-start max-w-fit ">
      <UserAvatar link={user.picture} className="mx-2" />
      <div className="flex flex-col">
        <div className="text-dark font-bold ">
          {user.firstName} {user.lastName}
        </div>
        <div className="text-dark break-words">{content}</div>
      </div>
    </div>
  )
}
