import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { changeChild } from '../src/store/OverlayWindow/overlayWindow.actions'
import store from '../src/store'

import Navbar from '../src/components/Navbar'
import { Feed } from '../src/layouts/Feed'
import SectionIndexer from '../src/components/SectionIndexer'
import Post from '../src/components/Post'
import Project from '../src/components/Project'
import SideBar from '../src/layouts/SideBar'

import Head from 'next/head'
import OverlayWindow from '../src/components/OverlayWindow'
import AddPost from '../src/components/AddPost'
import AddProject from '../src/components/AddProject'
import { getCurrentUser } from '../src/store/User/user.api'

function Browse({ posts, projects, sectionIndexer, changeChild, token, connectedUser }) {
  const router = useRouter()

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    changeChild(
      sectionIndexer.id === 0 ? (
        <AddPost setSubmitted={setSubmitted} />
      ) : (
        <AddProject setSubmitted={setSubmitted} />
      )
    )
  }, [sectionIndexer.id])

  useEffect(() => {
    if (!token.access) {
      router.push('/login')
    }
  }, [token.access])

  useEffect(async () => {
    await store.dispatch(getCurrentUser(token.access))
  }, [token.access])
  return (
    <>
      <Head>
        <title>Home - StartHub</title>
      </Head>
      <OverlayWindow />
      <Navbar />

      <SideBar section={sectionIndexer.title} />
      <div className="App w-full flex flex-col justify-start items-center pt-16">
        {connectedUser.id && (
          <Feed>
            <div className="text-4xl mt-6">
              Hello, <span className="text-purple">{connectedUser.firstName}.</span>{' '}
            </div>
            <div className="mt-2 font-thin">
              Here are some of the top selections for you.
            </div>
            <SectionIndexer />
            {sectionIndexer.id === 0
              ? posts.map((p) => <Post post={p} user={p.user} />)
              : projects.map((p) => <Project project={p} user={p.user} />)}
          </Feed>
        )}
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
    posts: state.posts.list,
    projects: state.projects.list,
    sectionIndexer: state.sectionIndexer,
    token: state.user.data.token,
    connectedUser: state.user.data.connectedUser || {},
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChild: (newChild) => dispatch(changeChild(newChild)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
