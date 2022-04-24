import React, { useEffect, useState, setState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import { connect } from 'react-redux'
import { BiLinkAlt } from 'react-icons/bi'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import { Button } from '../../../src/components/Button'
import SectionIndexer from '../../../src/components/SectionIndexer'
import ProjectList from '../../../src/components/Projects/ProjectList'
import UserAvatar from '../../../src/assets/images/UserAvatar'
import { getMonth } from '../../../src/helpers/date'
import { money } from '../../../src/helpers/money'
import {
  changeChild,
  toggleOverlay,
} from '../../../src/store/OverlayWindow/overlayWindow.actions'
import OverlayWindow from '../../../src/components/OverlayWindow'
import { spaceSections } from '../../../src/data/general'
import { sectionsInit } from '../../../src/store/SectionIndexer/sectionIndexer.actions'
import { setCurrentSpace } from '../../../src/store/Spaces/spaces.actions'
import PostList from '../../../src/components/Posts/PostList'
import AddPost from '../../../src/components/Posts/AddPost'
import { getProjects } from '../../../src/store/Projects/projects.api'
import { getPosts } from '../../../src/store/Posts/posts.api'
import AddProject from '../../../src/components/Projects/AddProject'
import Link from 'next/link'
import EmptyState from '../../../src/components/EmptyState'
import LeaderBoardCard from '../../../src/components/LeaderBoardCard'

const Evaluations = ({
  space,
  projects,
  posts,
  sectionIndexer,
  toggleOverlay,
  sectionsInit,
  setCurrentSpace,
  changeChild,
  getProjects,
  getPosts,
  currentSpace,
  connectedUser,
}) => {
  // useEffect(() => {
  //   sectionsInit(spaceSections)
  //   setCurrentSpace(space.id)
  //   getPosts()
  //   getProjects()
  // }, [])

  // useEffect(() => {
  //   canUserPost()
  // }, [])

  return (
    <>
      <Head>
        <title>{space.title}</title>
      </Head>
      <OverlayWindow />
      <div className="text-dark h-screen w-full flex flex-col justify-start items-start p-20">
        <div className="flex w-full">
          <div
            className="w-full flex items-end justify-start bg-white rounded-md shadow-lg p-10 m-2"
            style={{
              backgroundImage:
                'url(' + space.spacePic + '),  linear-gradient(#FFFFFF 10%, #212121)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'darken',
            }}
          >
            <div className="text-4xl text-white ">{space.title} - Evaluations</div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    sectionIndexer: state.sectionIndexer,
    isLoading: state.posts.loading || state.projects.loading,
    isOverlayOpen: state.overlayWindow.isOpen,
    projects: state.projects.list,
    posts: state.posts.list,
    currentSpace: state.spaces.currentSpace,
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    sectionsInit: (sections) => dispatch(sectionsInit(sections)),
    setCurrentSpace: (id) => dispatch(setCurrentSpace(id)),
    getPosts: () => dispatch(getPosts()),
    getProjects: () => dispatch(getProjects()),
  }
}

export async function getServerSideProps({ params }) {
  const space = await axios.get(API_BASEURL + `spaces/${params.spaceId}`).then((res) => {
    return res.data
  })

  return {
    props: {
      space,
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Evaluations)
