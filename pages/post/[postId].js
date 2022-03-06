import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import { posts } from '../../src/data/posts'
import { connectedUser } from '../../src/data/user'
import { Navbar } from '../../src/components/Navbar'
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
import { projects } from '../../src/data/projects'
import Dots from '../../src/assets/icons/Dots'


const Post = ({ toggleOverlay, changeChild }) => {
  const router = useRouter()
  const { postId } = router.query
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]

  return (
      <>
      <Head>
        <title>{posts[0].title}</title>
      </Head>

      <OverlayWindow />
      <Navbar isConnected connectedUser={connectedUser} />
      <div className="pt-20 pb-10 px-36 App w-full flex flex-col justify-start items-start">
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={posts[0].user.avatar} size={'20'} />
          <div className="ml-4 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {posts[0].user.firstName} {projects[0].user.lastName}
            </div>
            <div className={'text-xs opacity-50'}>{posts[0].user.position}</div>
          </div>

          <Button
            label={'Follow'}
            btnStyle={
              'border-2 border-green text-green text-sm ml-6 hover:bg-green hover:text-white'
            }
          />
        </div>
        <div className=" w-full flex justify-between mb-4 text-xl text-dark font-bold pt-8  ">
          <div>{posts[0].title}</div>
          
        </div>
        <div className="flex space-x-2  justify-start ">
          {posts[0].content
            ?.split(',')
            .filter((t) => t.length > 0)
            .map((t) => {
              return (
                <div className=" border-2 border-green mb-4 px-2 rounded-md ">
                  {' '}
                  {t}{' '}
                </div>
              )
            })}
        </div>
        <div>
            <img 
            className="max-w-2xl h-auto rounded-lg shadow-lg mt-8" 
            src={posts[0].picture} 
            alt="logo"/></div>
        
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Post)