import React from 'react'
import Dots from '../assets/icons/Dots'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import UserAvatar from '../assets/images/UserAvatar'
import { Button } from './Button'

export const Post = ({ user, content, time, picture }) => {
  return (
    <div
      className={
        'relative m-4 p-10 rounded-lg shadow-md flex flex-col items-start ' +
        (picture == null ? ' bg-white justify-start' : 'justify-between')
      }
      style={{
        backgroundImage: picture
          ? 'url(' + picture + '),  linear-gradient(#FFFFFF 50%, #111111)'
          : null,
        backgroundSize: 'cover',
        minHeight: picture ? 500 : 250,
        backgroundBlendMode: 'darken',
      }}
    >
      <Dots isDark className="absolute top-8 right-8 scale-125" />
      <div
        className={
          'flex flex-col absolute right-10 scale-125 ' +
          (picture ? 'bottom-16' : 'bottom-8')
        }
      >
        <Heart isClicked={Math.floor(Math.random() * 2)} className="my-1" />
        <Comment isCommented={Math.floor(Math.random() * 2)} className="my-1" />
        <Share isClicked={Math.floor(Math.random() * 2)} className="my-1" />
        <Saved isClicked={Math.floor(Math.random() * 2)} className="my-1" />
      </div>
      <div
        className={
          'flex flex-row w-full items-center ' +
          (picture ? 'py-2 px-5 max-w-max rounded-lg bg-white ' : '')
        }
      >
        <UserAvatar link={user.avatar} size={'20'} />
        <div className="ml-4 flex flex-col items-start">
          <div className="text-dark font-bold">
            {' '}
            {user.firstName} {user.lastName}
          </div>
          <div className={'text-xs opacity-50 '}>{time}</div>
        </div>
        {Math.floor(Math.random() * 2) === 0 && (
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white max-h-10 '
            }
          />
        )}
      </div>

      <div
        className={'mt-4 p-2 w-3/4 text-left text-lg ' + (picture ? 'text-white ' : '')}
      >
        {content}
      </div>
    </div>
  )
}
