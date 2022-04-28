import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'
import Loader from '../Loader'

export default function SummaryEvaluations({ listOfProjects }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const columns = [
    { field: 'projectName', headerName: 'Project Name', width: 140 },
    { field: 'summary_criteriaOne', headerName: '1', width: 50 },
    { field: 'summary_criteriaTwo', headerName: '2', width: 50 },
    { field: 'summary_criteriaThree', headerName: '3', width: 50 },
    { field: 'summary_criteriaFour', headerName: '4', width: 50 },
    { field: 'summary_criteriaFive', headerName: '5', width: 50 },
    {
      field: 'summary_overallGrade',
      headerName: 'Overall Grade',
      width: 150,
    },
  ]

  const getProjectEvaluationSummary = async (projectId) => {
    axios
      .get(`${API_BASEURL}projects/reviews/project-reviews/${projectId}`)
      .then((res) => {
        setData((oldData) => [
          ...oldData,
          { id: projectId, projectName: res.data.project.title, ...res.data.summary },
        ])
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const getData = async () => {
    await [...listOfProjects].map((p) => {
      getProjectEvaluationSummary(p)
    })
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {' '}
          <div className="text-dark text-xl mt-6 mb-3">Summary of Evaluations</div>
          <div className="h-96 w-full">
            <DataGrid
              rows={data}
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
