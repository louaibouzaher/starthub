import React, { useState } from 'react'
import { connect } from 'react-redux'

import Link from 'next/link'
import { setAddPostState, toggleIsEditing } from '../../store/Posts/posts.actions'
import { deletePost } from '../../store/Posts/posts.api'

import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'

import Dots from '../../assets/icons/Dots'
import Heart from '../../assets/icons/Heart'
import Comment from '../../assets/icons/Comment'
import ButtonArrow from '../../assets/icons/ButtonArrow'
import Share from '../../assets/icons/Share'
import Saved from '../../assets/icons/Saved'
import Delete from '../../assets/icons/Delete'
import Edit from '../../assets/icons/Edit'
import UserAvatar from '../../assets/images/UserAvatar'
import { Button } from '../Button'
import { reactionsColors } from '../../data/general'
import tailwindConfig from '../../../tailwind.config'
import { getMonth } from '../../helpers/date'
import AddPost from './AddPost'
import store from '../../store'
import Reactions from '../Reactions'
import Follow from '../User/Follow'

const Post = ({
  user,
  post,
  state,
  changeChild,
  toggleOverlay,
  toggleIsEditing,
  setAddPostState,
  connectedUser,
}) => {
  const [isDotsListOpen, setIsDotsListOpen] = useState(false)

  const isOwner = user.id == connectedUser?.id
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]

  const handleDelete = () => {
    setIsDotsListOpen(false)
    store.dispatch(deletePost(post.id))
  }

  const handleEdit = () => {
    setIsDotsListOpen(false)
    toggleIsEditing()
    setAddPostState({ ...post, user: user })
    changeChild(<AddPost />)
    toggleOverlay()
  }
  const time = new Date(post.time)

  return (
    <div
      className={
        'font-light relative m-4 p-10 rounded-lg shadow-md flex flex-col items-start ' +
        (post.picture == null ? ' bg-white justify-start' : 'justify-end')
      }
      style={{
        backgroundImage: post.picture
          ? 'url(' + post.picture + '),  linear-gradient(#FFFFFF 10%, #111111)'
          : null,
        backgroundSize: 'cover',
        minHeight: post.picture ? 500 : 250,
        backgroundBlendMode: 'darken',
      }}
    >
      {isOwner && (
        <div className="absolute flex flex-col items-end top-8 right-8">
          <Dots
            isDark
            className="scale-125"
            onClick={() => setIsDotsListOpen(!isDotsListOpen)}
          />
          {isDotsListOpen && (
            <div className="z-10 text-dark flex flex-col bg-gray-100 py-4 px-6 mt-2 rounded-md shadow-md">
              <div className="cursor-pointer flex my-1" onClick={() => handleEdit()}>
                <Edit color={tailwindConfig.theme.extend.colors.dark} />
                <div className="mx-1"> Edit Post</div>
              </div>
              <div
                className="bg-dark rounded-full opacity-5"
                style={{
                  height: 2,
                }}
              >
                {' '}
              </div>
              <div className="cursor-pointer flex my-1" onClick={() => handleDelete()}>
                <Delete color={tailwindConfig.theme.extend.colors.dark} />
                <div className="mx-1"> Delete Permanently</div>
              </div>
            </div>
          )}
        </div>
      )}
      <div
        className={
          'flex flex-row w-full items-center ' +
          (post.picture ? 'py-2  max-w-max rounded-lg ' : '')
        }
      >
        <Link href={`/profile/${user.id}`}>
          <UserAvatar link={user.avatar || user.picture} size={'16'} />
        </Link>
        <div className="ml-4 flex flex-col items-start">
          <Link href={`/profile/${user.id}`}>
            <div
              className={
                'hover:text-purple cursor-pointer font-bold ' +
                (post.picture ? ' text-white' : 'text-dark')
              }
            >
              {' '}
              {user.firstName} {user.lastName}
            </div>
          </Link>
          <div
            className={
              'text-xs opacity-50 ' + (post.picture ? ' text-white' : 'text-dark')
            }
          >
            {getMonth(time.getMonth()) + ' ' + time.getDate() + ',' + time.getFullYear()}{' '}
            at {time.getHours() + ':' + time.getMinutes()}
          </div>
        </div>
        {!isOwner && Math.floor(Math.random() * 2) === 0 && <Follow userId={user.id} />}
      </div>
      {!post.picture && (
        <div className={'mt-4 p-2 w-3/4 text-left text-lg font-bold '}>{post.title}</div>
      )}
      <div
        className={
          'mt-4 p-2 w-3/4 text-left whitespace-pre-line ' +
          (post.picture ? 'text-white text-lg' : 'text-sm')
        }
      >
        {post.picture ? post.title : post.content}
      </div>
      <div
        className={
          'w-full flex flex-row justify-between items-center mt-7 text-sm font-light'
        }
      >
        <Reactions />
        <Link href={'/post/' + post.id}>
          <div
            className={
              'flex items-center cursor-pointer  ' +
              (post.picture ? 'text-white ' : ' text-dark opacity-40')
            }
          >
            <div>Learn more</div>
            <ButtonArrow
              className={'-rotate-90'}
              color={post.picture ? 'white' : tailwindConfig.theme.extend.colors.dark}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    toggleOverlay: () => dispatch(toggleOverlay()),
    setAddPostState: (post) => dispatch(setAddPostState(post)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    changeChild: (child) => dispatch(changeChild(child)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
