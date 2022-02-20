import React from 'react'
import Dots from '../assets/icons/Dots'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import UserAvatar from '../assets/images/UserAvatar'
import { Button } from './Button'
import { connectedUser } from '../data/user'
export const Post = ({ user, content, time, picture, title, isOwnPost }) => {
  // TODO: Remove
  const showFollow = isOwnPost || user.firstName == connectedUser.firstName
  return (
    <div
      className={
        'relative m-4 p-10 rounded-lg shadow-md flex flex-col items-start ' +
        (picture == null ? ' bg-white justify-start' : 'justify-end')
      }
      style={{
        backgroundImage: picture
          ? 'url(' + picture + '),  linear-gradient(#FFFFFF 10%, #111111)'
          : null,
        backgroundSize: 'cover',
        minHeight: picture ? 500 : 250,
        backgroundBlendMode: 'darken',
      }}
    >
      <Dots isDark className="absolute top-8 right-8 scale-125" />

      <div
        className={
          'flex flex-row w-full items-center ' +
          (picture ? 'py-2  max-w-max rounded-lg ' : '')
        }
      >
        <UserAvatar link={user.avatar || user.picture} size={'16'} />
        <div className="ml-4 flex flex-col items-start">
          <div className={'font-bold ' + (picture ? ' text-white' : 'text-dark')}>
            {' '}
            {user.firstName} {user.lastName}
          </div>
          <div
            className={'text-xs opacity-50 ' + (picture ? ' text-white' : 'text-dark')}
          >
            {time}
          </div>
        </div>
        {!showFollow && Math.floor(Math.random() * 2) === 0 && (
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white max-h-10 '
            }
          />
        )}
      </div>
      {!picture && (
        <div className={'mt-4 p-2 w-3/4 text-left text-lg font-bold '}>{title}</div>
      )}
      <div
        className={
          'mt-4 p-2 w-3/4 text-left ' + (picture ? 'text-white text-lg' : 'text-sm')
        }
      >
        {picture ? title : content}
      </div>
      <div className={'flex flex-row mt-4 '}>
        <Heart isClicked={Math.floor(Math.random() * 2)} className="mx-1" />
        <Comment isCommented={Math.floor(Math.random() * 2)} className="mx-1" />
        <Share isClicked={Math.floor(Math.random() * 2)} className="mx-1" />
        <Saved isClicked={Math.floor(Math.random() * 2)} className="mx-1" />
      </div>
    </div>
  )
}
