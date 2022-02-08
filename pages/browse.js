import React, { useState } from 'react'

import MilestonesIcon from '../src/assets/icons/MilestonesIcon'
import DemosIcon from '../src/assets/icons/DemosIcon'

import { Navbar } from '../src/components/Navbar'
import { Feed } from '../src/layouts/Feed'
import { Post } from '../src/components/Post'
import { SectionIndexer } from '../src/components/SectionIndexer'
import { Demo } from '../src/components/Demo'
import { SideBar } from '../src/layouts/SideBar'

import { posts } from '../src/data/posts'
import { demos } from '../src/data/demos'
import { connectedUser } from '../src/data/user'
import Head from 'next/head'
import OverlayWindow from '../src/components/OverlayWindow'
import { AddPost } from '../src/components/AddPost'
import { AddDemo } from '../src/components/AddDemo'

function Browse() {
  const [section, setSection] = useState(0)
  const [userConnected, setUserConnected] = useState(true)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const sections = [
    {
      id: 0,
      title: 'Milestones',
      Icon: () => <MilestonesIcon />,
    },
    {
      id: 1,
      title: 'Demos',
      Icon: () => <DemosIcon />,
    },
  ]
  return (
    <>
      <Head>
        <title>Home - StartHub</title>
      </Head>
      <OverlayWindow isOpen={isOverlayOpen} setIsOpen={setIsOverlayOpen}>
        {section === 0 ? <AddPost /> : <AddDemo />}
      </OverlayWindow>
      <Navbar
        connectedUser={connectedUser}
        isConnected={userConnected}
        setUserConnected={setUserConnected}
      />

      <SideBar
        section={sections[section].title}
        setIsOverlayOpen={setIsOverlayOpen}
        setIsOpen={setIsOverlayOpen}
      />
      <div className="App w-full flex flex-col justify-start items-center pt-24">
        <Feed>
          <div className="text-4xl mt-6">
            Welcome back, <span className="text-purple">{connectedUser.firstName}.</span>{' '}
          </div>
          <div className="mt-2 font-thin">
            Here are some of the top selections for you.
          </div>
          <SectionIndexer
            section={section}
            changeSection={setSection}
            sections={sections}
          />
          {section === 0 &&
            posts.map((post) => (
              <Post
                user={post.user}
                time={post.time}
                picture={post.picture}
                content={post.content}
              />
            ))}
          {section === 1 && demos.map((demo) => <Demo demo={demo} user={demo.user} />)}
        </Feed>
      </div>
    </>
  )
}

export default Browse
