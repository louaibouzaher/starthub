import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { connect } from 'react-redux'

import SectionIndexer from '../../src/components/SectionIndexer'
import Navbar from '../../src/components/Navbar'
import Post from '../../src/components/Post'
import Project from '../../src/components/Project'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { Button } from '../../src/components/Button'
import axios from 'axios'
import { API_BASEURL } from '../../appConfig'

function Profile({ sectionIndexer = { id: 0 }, user = {} }) {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      <Head>
        <title>
          {user.firstName} {user.lastName} - StartHub
        </title>
      </Head>
      <Navbar />
      <div className=" w-full pt-20 px-60 min-h-screen text-dark">
        <div className="flex justify-center items-start  rounded-md shadow-md py-6 px-4 ">
          <UserAvatar sizing link={user.picture} className="h-32 w-32 my-2" />
          <div className="flex flex-col justify-start items-start mx-10 p-2 w-2/5">
            <div className="text-2xl p-2 font-bold">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-xs text-gray-400 px-2">{user.position}</div>
            <div className="text-sm p-2 break-words">{user.biography}</div>
            <div className="flex w-full mt-2">
              <Button
                btnStyle="w-1/2 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white mx-1"
                label="Follow"
                onClick={() => {
                  console.log('Follow')
                }}
              />
              <Button
                btnStyle="w-1/2 bg-white border-2 border-purple text-purple mx-1"
                label="Message"
                onClick={() => {
                  console.log('Follow')
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mx-10 text-xl">
            <div className="flex flex-col  justify-center item-center ">
              <div className="flex flex-col items-center p-2">
                <div>Followers</div>
                <div className="text-purple">32</div>
              </div>
              <div className="flex flex-col items-center p-2">
                <div>Following</div>
                <div className="text-purple">763</div>
              </div>
            </div>
            <div className="flex flex-col justify-center item-center p-2">
              <div className="flex flex-col items-center p-2">
                <div>Posts</div>
                <div className="text-purple">4</div>
              </div>
              <div className="flex flex-col items-center p-2">
                <div>Projects</div>
                <div className="text-purple">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-4 min-h-screen rounded-md">
          <SectionIndexer />
          {sectionIndexer.id === 0
            ? user.posts?.map((p) => <Post post={p} user={p.user} isOwnPost />)
            : user.projects?.map((p) => (
                <Project project={p} user={p.user} isOwnProject />
              ))}
        </div>
      </div>
      )
    </>
  )
}

export async function getStaticPaths() {
  const res = await axios.get(API_BASEURL + `profiles/`)
  const { data } = await res
  const paths = data.map((u) => {
    return {
      params: { userId: `${u.user.id}` },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const user = await axios.get(API_BASEURL + `profiles/${params.userId}`).then((res) => {
    return res.data
  })

  return {
    props: {
      user,
    },
  }
}

export default Profile
