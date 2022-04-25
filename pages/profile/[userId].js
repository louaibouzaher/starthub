import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { connect } from 'react-redux'
import { BiLinkAlt } from 'react-icons/bi'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import SectionIndexer from '../../src/components/SectionIndexer'
import Navbar from '../../src/components/Navbar'
import Post from '../../src/components/Posts/Post'
import Project from '../../src/components/Projects/Project'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { Button } from '../../src/components/Button'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'
import { defaultSections } from '../../src/data/general'
import { sectionsInit } from '../../src/store/SectionIndexer/sectionIndexer.actions'
import OverlayWindow from '../../src/components/OverlayWindow'
import {
  changeChild,
  toggleOverlay,
} from '../../src/store/OverlayWindow/overlayWindow.actions'
import SendMessage from '../../src/components/SendMessage'
import Follow from '../../src/components/User/Follow'

function Profile({
  sectionIndexer,
  user = {},
  connectedUser = {},
  sectionsInit,
  changeChild,
  toggleOverlay,
}) {
  const isOwner = connectedUser.id == user.user.id
  const router = useRouter()
  let website
  try {
    const url = user.website_url.includes('http')
      ? user.website_url
      : `http://${user.website_url}`
    website = new URL(url).href
  } catch (error) {}
  useEffect(() => {
    sectionsInit(defaultSections)
  }, [])

  const handleMessage = () => {
    changeChild(<SendMessage userTo={{ ...user, ...user.user }} />)
    toggleOverlay()
  }

  return (
    <>
      <Head>
        <title>
          {user.user.first_name} {user.user.lastName} - StartHub
        </title>
      </Head>
      <OverlayWindow />
      <Navbar />
      <div className=" w-full pt-20 px-60 min-h-screen text-dark">
        <div className="flex justify-center items-start  rounded-md shadow-md py-6 px-4 ">
          <UserAvatar sizing link={user.profilePic} className="h-32 w-32 my-2" />
          <div className="flex flex-col justify-start items-start mx-10 p-2 w-1/2">
            <div className="text-2xl p-2 font-bold">
              {user.user.first_name} {user.user.last_name}
            </div>
            <div className="text-xs text-gray-400 px-2">{user.position}</div>
            <div className="flex space-x-2 w-full mt-2">
              <div>
                <span className="text-purple">{user.followers.length}</span> Followers
              </div>
              <div>
                <span className="text-purple">{user.followings.length}</span> Following
              </div>
              <div>
                <span className="text-purple">{user.posts.length}</span> Posts
              </div>
              <div>
                <span className="text-purple">{user.projects.length}</span> Projects
              </div>
            </div>
            <div className="text-sm p-2 break-words">{user.biography}</div>
            <div className="flex space-x-1 my-1">
              {user.website_url && (
                <Link href={website} passHref>
                  <a target="_blank">
                    <BiLinkAlt size={28} />
                  </a>
                </Link>
              )}
              {user.linkedin_url && (
                <Link href={user.linkedin_url} passHref>
                  <a target="_blank">
                    <AiFillLinkedin size={28} />
                  </a>
                </Link>
              )}
              {user.twitter_url && (
                <Link href={user.twitter_url} passHref>
                  <a target="_blank">
                    <AiFillTwitterSquare size={28} />
                  </a>
                </Link>
              )}
            </div>
            <div className="flex w-full mt-2">
              {!isOwner && (
                <>
                  <Follow userId={user.user.id} classNames="w-1/2" />
                  <Button
                    btnStyle="w-1/2 bg-white border-2 border-purple text-purple mx-1"
                    label="Message"
                    onClick={handleMessage}
                  />
                </>
              )}
              {isOwner && (
                <Button
                  btnStyle="w-1/2 bg-white border-2 border-purple text-purple mx-1"
                  label="Edit Profile"
                  onClick={() => {
                    router.push('/settings')
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full my-4 min-h-screen rounded-md">
          <SectionIndexer />
          {sectionIndexer.selectedSection === 1
            ? user.posts?.map((p) => (
                <Post
                  post={p}
                  user={{
                    id: p.owner?.id,
                    firstName: p.owner?.first_name,
                    lastName: p.owner?.last_name,
                    avatar: p.profile?.profilePic,
                  }}
                  isOwnPost
                />
              ))
            : user.projects?.map((p) => (
                <Project
                  project={p}
                  user={{
                    id: p.owner?.id,
                    firstName: p.owner?.first_name,
                    lastName: p.owner?.last_name,
                    avatar: p.profile?.profilePic,
                    position: p.profile?.position,
                  }}
                  isOwnProject
                />
              ))}
        </div>
      </div>
      )
    </>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const profile = await axios
      .get(API_BASEURL + `profiles/${params.userId}`)
      .then((res) => {
        return res.data
      })
    const projects = await axios
      .get(API_BASEURL + `projects/?owner=${params.userId}&space=1`)
      .then((res) => {
        return res.data
      })
    const posts = await axios
      .get(API_BASEURL + `posts/?owner=${params.userId}&space=1`)
      .then((res) => {
        return res.data
      })

    const user = {
      ...profile,
      projects,
      posts,
    }
    return {
      props: {
        user,
      },
    }
  } catch (error) {}
}

const mapStateToProps = (state) => {
  return {
    sectionIndexer: state.sectionIndexer,
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sectionsInit: (sections) => dispatch(sectionsInit(sections)),
    changeChild: (child) => dispatch(changeChild(child)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
