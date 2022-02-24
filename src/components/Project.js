import React from 'react'
import ReactPlayer from 'react-player'
import Dots from '../assets/icons/Dots'
import Heart from '../assets/icons/Heart'
import Comment from '../assets/icons/Comment'
import Share from '../assets/icons/Share'
import Saved from '../assets/icons/Saved'
import UserAvatar from '../assets/images/UserAvatar'
import Location from '../assets/icons/Location'
import { Button } from './Button'
import { connectedUser } from '../data/user'
import { reactionsColors } from '../data/general'

export const Project = ({ user, project, isOwnProject }) => {
  // TODO: Remove
  const showFollow = isOwnProject || user.firstName == connectedUser.firstName
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]
  return (
    <div
      className={
        'relative m-4 p-10 rounded-lg shadow-lg flex flex-col items-start justify-between bg-white'
      }
    >
      <Dots isDark className="absolute top-8 right-8 scale-125" />

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
        <UserAvatar link={user.picture} size={'20'} />
        <div className="ml-4 flex flex-col items-start">
          <div className="text-dark font-bold">
            {' '}
            {user.firstName} {user.lastName}
          </div>
          <div className={'text-xs opacity-50'}>{user.position}</div>
        </div>
        {!showFollow && (
          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white'
            }
          />
        )}
      </div>
      <div className={'flex flex-row mt-7 text-sm font-light'}>
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
    </div>
  )
}
