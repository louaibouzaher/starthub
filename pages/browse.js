import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'

import { changeChild } from '../src/store/OverlayWindow/overlayWindow.actions'
import store from '../src/store'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../src/components/Navbar'
import { Feed } from '../src/layouts/Feed'
import SectionIndexer from '../src/components/SectionIndexer'
import Post from '../src/components/Post'
import Project from '../src/components/Project'
import SideBar from '../src/layouts/SideBar'
import { ToastContainer, toast } from 'react-toastify'
import Head from 'next/head'
import OverlayWindow from '../src/components/OverlayWindow'
import AddPost from '../src/components/AddPost'
import AddProject from '../src/components/AddProject'
import { getCurrentUser } from '../src/store/User/user.api'
import { getPosts } from '../src/store/Posts/posts.api'
import { getProjects } from '../src/store/Projects/projects.api'
import { sectionsInit } from '../src/store/SectionIndexer/sectionIndexer.actions'
import { defaultSections } from '../src/data/general'

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
    store.dispatch(getPosts())
    store.dispatch(getProjects())
  }, [])

  return (
    <>
      <Head>
        <title>Home - StartHub</title>
      </Head>
      <OverlayWindow />
      <Navbar />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <SideBar section={sectionIndexer?.title} />
      <div className="App w-full flex flex-col justify-start items-center pt-16">
        <Feed>
          <div className="text-4xl mt-6">
            Hello, <span className="text-purple">{connectedUser.firstName}</span>{' '}
          </div>
          <div className="mt-2 font-thin">
            Here are some of the top selections for you.
          </div>
          <SectionIndexer />
          {sectionIndexer.selectedSection === 0
            ? posts?.map((p) => (
                <Post
                  post={p}
                  user={{
                    id: p.owner?.id,
                    firstName: p.owner?.first_name,
                    lastName: p.owner?.last_name,
                    avatar: p.profile?.profilePic,
                  }}
                />
              ))
            : projects?.map((p) => (
                <Project
                  project={p}
                  user={{
                    id: p.owner?.id,
                    firstName: p.owner?.first_name,
                    lastName: p.owner?.last_name,
                    avatar: p.profile?.profilePic,
                    position: p.profile?.position,
                  }}
                />
              ))}
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
