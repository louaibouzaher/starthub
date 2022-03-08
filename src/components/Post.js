import React, { useState } from 'react'
import { connect } from 'react-redux'

import Link from 'next/link'
import {
  deletePost,
  setAddPostState,
  toggleIsEditing,
} from '../store/Posts/posts.actions'

import { changeChild, toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'

import Dots from '../assets/icons/Dots'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import ButtonArrow from '../assets/icons/ButtonArrow'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import Delete from '../assets/icons/Delete'
import Edit from '../assets/icons/Edit'
import UserAvatar from '../assets/images/UserAvatar'
import { Button } from './Button'
import { reactionsColors } from '../data/general'
import tailwindConfig from '../../tailwind.config'

import AddPost from './AddPost'

const Post = ({
  user,
  post,
  deletePost,
  changeChild,
  toggleOverlay,
  toggleIsEditing,
  setAddPostState,
  connectedUser,
}) => {
  const [isDotsListOpen, setIsDotsListOpen] = useState(false)

  // TODO: Remove
  const showFollow = user.id != connectedUser?.id
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]

  const handleDelete = () => {
    setIsDotsListOpen(false)
    deletePost(post.id)
  }

  const handleEdit = () => {
    setIsDotsListOpen(false)
    toggleIsEditing()
    setAddPostState({ ...post, user: user })
    changeChild(
      <AddPost
        initialState={{ ...post, user: user }}
        setSubmitted={(r) => {
          console.log(r)
        }}
      />
    )
    toggleOverlay()
  }

  return (
    <div
      className={
        'relative m-4 p-10 rounded-lg shadow-md flex flex-col items-start ' +
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
      <div className="absolute flex flex-col items-end top-8 right-8">
        <Dots
          isDark
          className="scale-125"
          onClick={() => setIsDotsListOpen(!isDotsListOpen)}
        />
        {isDotsListOpen && (
          <div className="text-dark flex flex-col bg-gray-100 py-4 px-6 mt-2 rounded-md shadow-md">
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
      <div
        className={
          'flex flex-row w-full items-center ' +
          (post.picture ? 'py-2  max-w-max rounded-lg ' : '')
        }
      >
        <UserAvatar link={user.avatar || user.picture} size={'16'} />
        <div className="ml-4 flex flex-col items-start">
          <div className={'font-bold ' + (post.picture ? ' text-white' : 'text-dark')}>
            {' '}
            {user.firstName} {user.lastName}
          </div>
          <div
            className={
              'text-xs opacity-50 ' + (post.picture ? ' text-white' : 'text-dark')
            }
          >
            {post.time}
          </div>
        </div>
        {showFollow && Math.floor(Math.random() * 2) === 0 && (
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white max-h-10 '
            }
          />
        )}
      </div>
      {!post.picture && (
        <div className={'mt-4 p-2 w-3/4 text-left text-lg font-bold '}>{post.title}</div>
      )}
      <div
        className={
          'mt-4 p-2 w-3/4 text-left ' + (post.picture ? 'text-white text-lg' : 'text-sm')
        }
      >
        {post.picture ? post.title : post.content}
      </div>
      <div
        className={
          'w-full flex flex-row justify-between items-center mt-7 text-sm font-light'
        }
      >
        <div className="flex">
          <Heart isClicked={reactions[0]} className="mx-1" />
          <div
            className="mr-2"
            style={{
              color: reactions[0] ? reactionsColors.like : reactionsColors.disabled,
            }}
          >
            Like
          </div>
          <Comment isCommented={reactions[1]} className="mx-1" />
          <div
            className=" mr-2"
            style={{
              color: reactions[1] ? reactionsColors.comment : reactionsColors.disabled,
            }}
          >
            Comment
          </div>
          <Share isClicked={reactions[2]} className="mx-1" />
          <div
            className=" mr-2"
            style={{
              color: reactions[2] ? reactionsColors.share : reactionsColors.disabled,
            }}
          >
            Share
          </div>
          <Saved isClicked={reactions[3]} className="mx-1" />
          <div
            className=" mr-2"
            style={{
              color: reactions[3] ? reactionsColors.save : reactionsColors.disabled,
            }}
          >
            Save
          </div>
        </div>
        <Link href={'/post/' + post.id}>
          <div className="text-purple flex items-center cursor-pointer">
            <div>Learn more</div>
            <ButtonArrow
              className={'-rotate-90'}
              color={tailwindConfig.theme.extend.colors.purple}
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
