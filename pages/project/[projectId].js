import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { projects } from '../../src/data/projects'

import Navbar from '../../src/components/Navbar'
import OverlayWindow from '../../src/components/OverlayWindow'
import SendMessage from '../../src/components/SendMessage'
import { Button } from '../../src/components/Button'
import Saved from '../../src/assets/icons/Saved'
import Share from '../../src/assets/icons/Share'
import Heart from '../../src/assets/icons/Heart'
import Comment from '../../src/assets/icons/Comment'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { reactionsColors, sampleComments, users } from '../../src/data/general'
import { toggleOverlay } from '../../src/store/OverlayWindow/overlayWindow.actions'
import { PublicationComment } from '../../src/components/PublicationDetails/PublicationComment'
import ReactPlayer from 'react-player'
import Location from '../../src/assets/icons/Location'
import { changeChild } from '../../src/store/OverlayWindow/overlayWindow.actions'
import Head from 'next/head'

const Project = ({ toggleOverlay, changeChild }) => {
  const router = useRouter()
  const { projectId } = router.query
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]

  useEffect(() => {
    changeChild(<SendMessage userTo={projects[0].user} />)
  }, [])

  return (
    <>
      <Head>
        <title>{projects[0].title}</title>
      </Head>
      <OverlayWindow />
      <Navbar />
      <div className="pt-20 pb-10 px-36 App w-full flex flex-col justify-start items-start">
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={projects[0].user.avatar} size={'20'} />
          <div className="ml-4 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {projects[0].user.firstName} {projects[0].user.lastName}
            </div>
            <div className={'text-xs opacity-50'}>{projects[0].user.position}</div>
          </div>

          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white'
            }
          />
        </div>
        <div className=" w-full flex justify-between mb-4 text-4xl text-dark font-bold pt-8  ">
          <div>{projects[0].title}</div>
          <Button
            btnStyle=" w-1/4 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white"
            label="Get In Touch"
            onClick={() => toggleOverlay()}
          />
        </div>
        <div className="flex space-x-2 justify-start ">
          {projects[0].tags
            ?.split(',')
            .filter((t) => t.length > 0)
            .map((t) => {
              return (
                <div className="text-sm border-2 border-green text-green mb-4 px-2 rounded-md ">
                  {' '}
                  {t}{' '}
                </div>
              )
            })}
        </div>
        <div className="flex flex-row items-center">
          <Location className="mr-1" />{' '}
          <span className="my-2 text-dark">{projects[0].location}</span>
        </div>
        <span className="mt-10 text-xl font-bold text-dark ">Description </span>
        <div className={' my-2 text-dark'}>{projects[0].description}</div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div className=" text-xl text-dark my-2">
            <div className="my-2">
              <span className=" text-xl font-bold">Field </span>
              <span className="text-purple">{projects[0].field}</span>
            </div>
            <div className="my-2">
              <span className=" text-xl font-bold ">Number of Employees </span>
              <span className="text-purple">{projects[0].numberOfEmployees}</span>
            </div>
            <div className="my-2">
              <span className=" text-xl font-bold ">Inception Date </span>
              <span className="text-purple">
                {projects[0].establishedOn
                  ? projects[0].establishedOn.getDate() +
                    '-' +
                    projects[0].establishedOn.getMonth() +
                    '-' +
                    projects[0].establishedOn.getFullYear()
                  : 'Not yet'}
              </span>
            </div>
            <div className="my-2">
              <span className=" text-xl font-bold">Capital </span>
              <span className="text-purple"> {projects[0].estimatedCapital}$ </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl mt-6 mb-4 overflow-hidden">
          {projects[0].video.includes('youtu.be') ||
          projects[0].video.includes('youtube') ? (
            <ReactPlayer url={projects[0].video} muted={true} />
          ) : (
            <video className="w-full" controls>
              <source src={projects[0].video} type="video/mp4" muted></source>
            </video>
          )}
        </div>
        <div className="py-6 w-full">
          <div className={'flex flex-row mt-6 text-sm font-light'}>
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
              className="mr-2"
              style={{
                color: reactions[1] ? reactionsColors.comment : reactionsColors.disabled,
              }}
            >
              Comment
            </div>
            <Share isClicked={reactions[2]} className="mx-1" />
            <div
              className="mr-2"
              style={{
                color: reactions[2] ? reactionsColors.share : reactionsColors.disabled,
              }}
            >
              Share
            </div>
            <Saved isClicked={reactions[3]} className="mx-1" />
            <div
              className="mr-2"
              style={{
                color: reactions[3] ? reactionsColors.save : reactionsColors.disabled,
              }}
            >
              Save
            </div>
          </div>
          <div className="mt-5 rounded-md  ">
            {users
              .slice(Math.floor(Math.random() * users.length - 1), users.length)
              .map((u) => (
                <PublicationComment
                  user={u}
                  content={
                    sampleComments[Math.floor(Math.random() * sampleComments.length)]
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChild: (child) => dispatch(changeChild(child)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
