import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import store from '../store'
import tailwindConfig from '../../tailwind.config'
import Dots from '../assets/icons/Dots'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import Delete from '../assets/icons/Delete'
import Edit from '../assets/icons/Edit'
import UserAvatar from '../assets/images/UserAvatar'
import Location from '../assets/icons/Location'
import { Button } from './Button'
import { reactionsColors } from '../data/general'
import Link from 'next/link'
import ButtonArrow from '../assets/icons/ButtonArrow'
import { setAddProjectState, toggleIsEditing } from '../store/Projects/projects.actions'
import { deleteProject } from '../store/Projects/projects.api'
import { changeChild, toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import AddProject from './AddProject'

const Project = ({
  user,
  project,
  changeChild,
  toggleOverlay,
  toggleIsEditing,
  setAddProjectState,
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
    store.dispatch(deleteProject(project.id))
  }

  const handleEdit = () => {
    setIsDotsListOpen(false)
    toggleIsEditing()
    setAddProjectState({ ...project, user: user })
    changeChild(
      <AddProject
        initialState={{ ...project, user: user }}
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
        'relative m-4 p-10 rounded-lg shadow-lg flex flex-col items-start justify-between bg-white'
      }
    >
      <div className="absolute flex flex-col items-end top-8 right-8">
        {isOwner && (
          <Dots
            isDark
            className="scale-125"
            onClick={() => setIsDotsListOpen(!isDotsListOpen)}
          />
        )}
        {isDotsListOpen && (
          <div className="text-dark flex flex-col bg-gray-100 py-4 px-6 mt-2 rounded-md shadow-md">
            <div className="cursor-pointer flex my-1" onClick={() => handleEdit()}>
              <Edit color={tailwindConfig.theme.extend.colors.dark} />
              <div className="mx-1"> Edit Project</div>
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

      <div className="text-4xl text-dark font-bold">{project.title}</div>
      <div className="flex mt-2">
        {project.tags
          ?.split(',')
          .filter((t) => t.length > 0)
          .map((t) => {
            return (
              <div
                className="border-green text-green mx-1 px-2 rounded-md "
                style={{
                  borderWidth: 1,
                }}
              >
                {' '}
                {t}{' '}
              </div>
            )
          })}
      </div>
      <div className="flex flex-row mt-2 items-center">
        <Location /> <span className="mx-1">{project.location}</span>
      </div>
      {project.video && (
        <div className="w-4/5 flex justify-start items-center rounded-xl mt-6 overflow-hidden">
          {project?.video?.includes('youtu.be') || project?.video?.includes('youtube') ? (
            <ReactPlayer url={project.video} muted={true} />
          ) : (
            <video className="w-full" controls>
              <source src={project.video} type="video/mp4" muted></source>
            </video>
          )}
        </div>
      )}
      <div className={'mt-4 p-2 w-3/4 text-left text-sm '}>{project.description}</div>
      <div className="flex flex-row w-full items-center mt-2 ">
        <Link href={`/profile/${user.id}`} passHref>
          <UserAvatar link={user.avatar} size={'20'} />
        </Link>
        <div className="ml-4 flex flex-col items-start">
          <Link href={`/profile/${user.id}`} passHref>
            <div className="hover:text-purple cursor-pointer text-dark font-bold">
              {' '}
              {user.firstName} {user.lastName}
            </div>
          </Link>
          <div className={'text-xs opacity-50'}>{user.position}</div>
        </div>
        {!isOwner && (
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white'
            }
          />
        )}
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
        <Link href={'/project/' + project.id}>
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
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    toggleOverlay: () => dispatch(toggleOverlay()),
    setAddProjectState: (project) => dispatch(setAddProjectState(project)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    changeChild: (child) => dispatch(changeChild(child)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
