import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { Navbar } from '../../src/components/Navbar'
import ProjectsIcon from '../../src/assets/icons/ProjectsIcon'
import PostsIcon from '../../src/assets/icons/PostsIcon'
import { SectionIndexer } from '../../src/components/SectionIndexer'
import { Post } from '../../src/components/Post'
import { Project } from '../../src/components/Project'
import UserAvatar from '../../src/assets/images/UserAvatar'
import { connectedUser } from '../../src/data/user'
import { Button } from '../../src/components/Button'
export default function Profile() {
  const router = useRouter()
  const { spaceId } = router.query

  const [section, setSection] = useState(0)

  const sections = [
    {
      id: 0,
      title: 'Posts',
      Icon: () => <PostsIcon />,
    },
    {
      id: 1,
      title: 'Projects',
      Icon: () => <ProjectsIcon />,
    },
  ]

  return (
    <>
      <Head>
        <title>
          {connectedUser.firstName} {connectedUser.lastName} - StartHub
        </title>
      </Head>
      <Navbar isConnected connectedUser={connectedUser} />
      <div className=" w-full pt-20 px-60 min-h-screen text-dark">
        <div className="flex justify-center items-start  rounded-md shadow-md py-6 px-4 ">
          <UserAvatar sizing link={connectedUser.picture} className="h-32 w-32 my-2" />
          <div className="flex flex-col justify-start items-start mx-10 p-2 w-2/5">
            <div className="text-2xl p-2 font-bold">
              {connectedUser.firstName} {connectedUser.lastName}
            </div>
            <div className="text-xs text-gray-400 px-2">{connectedUser.position}</div>
            <div className="text-sm p-2 break-words">{connectedUser.biography}</div>
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
          <SectionIndexer
            section={section}
            changeSection={setSection}
            sections={sections}
          />
          {section === 0 &&
            connectedUser.posts.map((post) => (
              <Post
                user={post.user}
                time={post.time}
                picture={post.picture}
                content={post.content}
                title={post.title}
                isOwnPost
              />
            ))}
          {section === 1 &&
            connectedUser.projects.map((p) => (
              <Project project={p} user={p.user} isOwnProject />
            ))}
        </div>
      </div>
      )
    </>
  )
}
