import React, { useEffect, useState, setState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
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
import { getReviews } from '../../../src/store/Reviews/reviews.api'
import store from '../../../src/store'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { getSummaryOfRows, parseRows } from '../../../src/helpers/evaluations'
import SummaryEvaluations from '../../../src/components/Projects/SummaryEvaluations'

const Evaluations = ({
  space,
  evaluations,
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
  const router = useRouter()

  const columns = [
    { field: 'judge', headerName: 'Judge', width: 140 },
    { field: 'projectName', headerName: 'Project Name', width: 140 },
    { field: 'criteriaOne', headerName: '1', width: 50 },
    { field: 'criteriaTwo', headerName: '2', width: 50 },
    { field: 'criteriaThree', headerName: '3', width: 50 },
    { field: 'criteriaFour', headerName: '4', width: 50 },
    { field: 'criteriaFive', headerName: '5', width: 50 },
    {
      field: 'overallGrade',
      headerName: 'Overall Grade',
      width: 150,
    },
    {
      field: 'feedback',
      headerName: 'Feedback',
      width: 500,
    },
  ]

  const rows = parseRows(evaluations)
  // const rowsSummary = getSummaryOfRows(rows)
  useEffect(() => {
    if (connectedUser.id == space.owner.id) {
      store.dispatch(getReviews(space.id))
    } else {
      router.push(`/competition/${space.id}`)
    }
  }, [])
  return (
    <>
      <Head>
        <title>{space.title} - Evaluations</title>
      </Head>
      <OverlayWindow />
      <div className="text-dark  w-full flex flex-col justify-start items-start p-20">
        <div className="w-full">
          <Link href={`/competition/${space.id}`}>
            <div className="text-purple my-4 cursor-pointer ">{`< Go Back`}</div>
          </Link>
          <div className="text-2xl font-bold text-dark my-2">
            {space.title} - Projects Evaluations
          </div>
          <div className="text-dark text-xl my-1">All Evaluations</div>
          <div className="h-96 w-full">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </div>
          <SummaryEvaluations
            listOfProjects={new Set(evaluations.map((e) => e.project.id))}
          />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    evaluations: state.reviews.list,
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
