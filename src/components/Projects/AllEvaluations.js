import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import Loader from '../Loader'
import { parseRows } from '../../helpers/evaluations'
import { getReviews } from '../../store/Reviews/reviews.api'
import store from '../../store'
function AllEvaluations({ space, connectedUser, evaluations }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
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
      setLoading(false)
    } else {
      router.push(`/competition/${space.id}`)
    }
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {' '}
          <div className="text-dark text-xl mt-6 mb-3">All Evaluations</div>
          <div className="h-96 w-full">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          </div>{' '}
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    evaluations: state.reviews.list,
    currentSpace: state.spaces.currentSpace,
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export async function getServerSideProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(AllEvaluations)
