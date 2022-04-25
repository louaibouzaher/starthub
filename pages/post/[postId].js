import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Navbar from '../../src/components/Navbar'
import OverlayWindow from '../../src/components/OverlayWindow'
import { Button } from '../../src/components/Button'
import Saved from '../../src/assets/icons/Saved'
import Share from '../../src/assets/icons/Share'
import Heart from '../../src/assets/icons/Heart'
import Comment from '../../src/assets/icons/Comment'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { reactionsColors, sampleComments, users } from '../../src/data/general'
import { PublicationComment } from '../../src/components/PublicationDetails/PublicationComment'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import Head from 'next/head'
import { getMonth } from '../../src/helpers/date'
import Follow from '../../src/components/User/Follow'

const Post = ({ post, connectedUser }) => {
  const reactions = [
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
    Math.floor(Math.random() * 2),
  ]
  const time = new Date(post.time)
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <OverlayWindow />
      <div className="pt-20 pb-10 px-36 App w-full flex flex-col justify-start items-start">
        <div className="flex flex-row w-full items-center mt-2 ">
          <UserAvatar link={post.profile.profilePic} size={'20'} />
          <div className="ml-4 flex flex-col items-start">
            <div className="text-dark font-bold">
              {' '}
              {post.owner.first_name} {post.owner.last_name}
            </div>
            <div className={'text-xs opacity-50'}>{post.profile.position}</div>
          </div>

          {connectedUser.id != post.owner.id && <Follow userId={post.owner.id} />}
        </div>

        <div className=" w-full flex justify-between  text-3xl text-dark font-bold pt-8  ">
          {post.title}
        </div>
        <div className="text-xs opacity-50">
          {getMonth(time.getMonth()) + ' ' + time.getDate() + ',' + time.getFullYear()}
        </div>
        <div className="flex space-x-2 mt-4 justify-start whitespace-pre-line">
          {post.content}
        </div>

        {post.picture && (
          <img
            className="max-w-2xl h-auto rounded-lg shadow-lg mt-8"
            src={post.picture}
          />
        )}

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

export async function getServerSideProps({ params }) {
  const post = await axios.get(API_BASEURL + `posts/${params.postId}`).then((res) => {
    return res.data
  })

  return {
    props: {
      post,
    },
  }
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
