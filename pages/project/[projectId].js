import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { projects } from '../../src/data/projects'
import { money } from '../../src/helpers/money'
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
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import { getMonth } from '../../src/helpers/date'
import Follow from '../../src/components/User/Follow'
import Reactions from '../../src/components/Reactions'

const Project = ({ toggleOverlay, changeChild, project, connectedUser }) => {
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]

  const handleGetInTouch = () => {
    toggleOverlay()
    changeChild(
      <SendMessage userTo={{ ...project.owner, picture: project.profile.profilePic }} />
    )
  }

  const establishedOn = new Date(project.establishedOn)
  const time = new Date(project.time)
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <OverlayWindow />
      <div className="pt-20 pb-10 px-36 App w-full flex flex-col justify-start items-start">
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={project.profile.profilePic} size={'20'} />
          <div className="ml-4 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {project.owner.first_name} {project.owner.last_name}
            </div>
            <div className={'text-xs opacity-50'}>{project.profile.position}</div>
          </div>
          {connectedUser.id != project.owner.id && <Follow userId={project.owner.id} />}
        </div>
        <div className=" w-full flex justify-between mb-4 text-4xl text-dark font-bold pt-8  ">
          <div>{project.title}</div>

          <Button
            btnStyle=" w-1/4 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white"
            label="Get In Touch"
            onClick={handleGetInTouch}
          />
        </div>
        <div className="text-xs opacity-50 mb-2">
          {getMonth(time.getMonth()) + ' ' + time.getDate() + ',' + time.getFullYear()}
        </div>
        <div className="flex space-x-2 justify-start ">
          {project?.tags
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
          <span className="my-2 text-dark">{project.location}</span>
        </div>
        <span className="mt-10 text-xl font-bold text-dark ">Description </span>
        <div className={' my-2 text-dark'}>{project.description}</div>
        <div className="flex flex-col justify-start items-start mt-2">
          <div className=" text-xl text-dark my-2">
            <div className="my-2 space-x-2">
              <span className=" text-xl font-bold">Industry </span>
              <span className="text-purple">{project.industry}</span>
            </div>
            <div className="my-2  space-x-2">
              <span className=" text-xl font-bold ">Number of Employees </span>
              <span className="text-purple">{project.numberOfEmployees}</span>
            </div>
            <div className="my-2  space-x-2">
              <span className=" text-xl font-bold ">Inception Date </span>
              <span className="text-purple">
                {project.isEstablished
                  ? establishedOn.getDate() +
                    '-' +
                    (establishedOn.getMonth() + 1) +
                    '-' +
                    establishedOn.getFullYear()
                  : 'Not yet'}
              </span>
            </div>
            <div className="my-2  space-x-2">
              <span className=" text-xl font-bold">Capital </span>
              <span className="text-purple"> {money(project.estimatedCapital)} </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl mt-6 mb-4 overflow-hidden">
          {project.video.includes('youtu.be') || project.video.includes('youtube') ? (
            <ReactPlayer url={project.video} muted={true} />
          ) : (
            <video className="w-full" controls>
              <source src={project.video} type="video/mp4" muted></source>
            </video>
          )}
        </div>
        <div className="py-6 w-full">
          <Reactions />
          {/* <div className="mt-5 rounded-md  ">
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
          </div> */}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const project = await axios
    .get(API_BASEURL + `projects/${params.projectId}/`)
    .then((res) => {
      return res.data
    })

  return {
    props: {
      project,
    },
  }
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChild: (child) => dispatch(changeChild(child)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
