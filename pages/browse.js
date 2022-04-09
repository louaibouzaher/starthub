import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { changeChild } from '../src/store/OverlayWindow/overlayWindow.actions'
import store from '../src/store'
import { Feed } from '../src/layouts/Feed'
import SectionIndexer from '../src/components/SectionIndexer'
import SideBar from '../src/layouts/SideBar'
import Head from 'next/head'
import Messages from '../src/assets/icons/Messages'
import OverlayWindow from '../src/components/OverlayWindow'
import AddPost from '../src/components/AddPost'
import AddProject from '../src/components/AddProject'
import { setCurrentSpace } from '../src/store/Spaces/spaces.actions'
import { getCurrentUser } from '../src/store/User/user.api'
import { getPosts } from '../src/store/Posts/posts.api'
import { getProjects } from '../src/store/Projects/projects.api'
import { sectionsInit } from '../src/store/SectionIndexer/sectionIndexer.actions'
import { defaultSections } from '../src/data/general'
import PostList from '../src/components/PostList'
import ProjectList from '../src/components/ProjectList'

function Browse({
  isLoading,
  posts,
  projects,
  sectionIndexer,
  changeChild,
  isConnected,
  connectedUser,
  sectionsInit,
}) {
  const router = useRouter()

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    changeChild(
      sectionIndexer.selectedSection === 0 ? (
        <AddPost space={1} />
      ) : (
        <AddProject space={1} />
      )
    )
  }, [sectionIndexer.selectedSection, isLoading])

  useEffect(() => {
    const fetchUser = async () => {
      await store.dispatch(getCurrentUser())
    }
    fetchUser()
  }, [isConnected])

  useEffect(() => {
    sectionsInit(defaultSections)
    store.dispatch(setCurrentSpace(1))
    store.dispatch(getPosts())
    store.dispatch(getProjects())
  }, [])

  return (
    <>
      <Head>
        <title>Home - StartHub</title>
      </Head>
      <OverlayWindow />
      <SideBar section={sectionIndexer?.title} />
      <div className="font-bold App w-full flex flex-col justify-start items-center pt-16">
        <Feed>
          <div className="text-4xl mt-6">
            Hello, <span className="text-purple">{connectedUser.firstName}</span>{' '}
          </div>
          <div className="mt-2">Here are some of the top selections for you.</div>
          <SectionIndexer />
          {sectionIndexer.selectedSection === 0 ? (
            <PostList posts={posts} />
          ) : (
            <ProjectList projects={projects} />
          )}
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
    isLoading: state.posts.loading || state.projects.loading,
    isOverlayOpen: state.overlayWindow.isOpen,
    posts: state.posts.list,
    projects: state.projects.list,
    sectionIndexer: state.sectionIndexer,
    token: state.user.data.token,
    isConnected: state.user.isConnected,
    connectedUser: state.user.data.connectedUser || {},
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    sectionsInit: (sections) => dispatch(sectionsInit(sections)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
