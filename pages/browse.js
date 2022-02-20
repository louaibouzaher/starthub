import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Navbar } from '../src/components/Navbar'
import { Feed } from '../src/layouts/Feed'
import { Post } from '../src/components/Post'
import SectionIndexer from '../src/components/SectionIndexer'
import { Project } from '../src/components/Project'
import SideBar from '../src/layouts/SideBar'

import { connectedUser } from '../src/data/user'
import Head from 'next/head'
import OverlayWindow from '../src/components/OverlayWindow'
import AddPost from '../src/components/AddPost'
import AddProject from '../src/components/AddProject'

function Browse({ posts, projects, sectionIndexer }) {
  const [submitted, setSubmitted] = useState(false)
  const [userConnected, setUserConnected] = useState(true)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Home - StartHub</title>
      </Head>
      <OverlayWindow isOpen={isOverlayOpen} setIsOpen={setIsOverlayOpen}>
        {sectionIndexer.id === 0 ? (
          <AddPost setSubmitted={setSubmitted} />
        ) : (
          <AddProject setSubmitted={setSubmitted} />
        )}
      </OverlayWindow>
      <Navbar
        connectedUser={connectedUser}
        isConnected={userConnected}
        setUserConnected={setUserConnected}
      />

      <SideBar
        section={sectionIndexer.title}
        setIsOverlayOpen={setIsOverlayOpen}
        setIsOpen={setIsOverlayOpen}
      />
      <div className="App w-full flex flex-col justify-start items-center pt-16">
        <Feed>
          <div className="text-4xl mt-6">
            Hello, <span className="text-purple">{connectedUser.firstName}.</span>{' '}
          </div>
          <div className="mt-2 font-thin">
            Here are some of the top selections for you.
          </div>
          <SectionIndexer />
          {sectionIndexer.id === 0
            ? posts.map((post) => (
                <Post
                  user={post.user}
                  time={post.time}
                  picture={post.picture}
                  content={post.content}
                  title={post.title}
                />
              ))
            : projects.map((p) => <Project project={p} user={p.user} />)}
        </Feed>
      </div>
      {submitted && (
        <div className="z-50 fixed bottom-10 right-10 min-w-max py-4 px-8 flex justify-center items-center border-l-green border-l-4 bg-white rounded-sm shadow-md">
          <div>Successfully Posted ✅</div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    projects: state.projects,
    sectionIndexer: state.sectionIndexer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
