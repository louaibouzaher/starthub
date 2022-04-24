import React, { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import Link from 'next/link'
import { connect } from 'react-redux'
import store from '../../store'
import { setAddReviewState, toggleIsEditing } from '../../store/Reviews/reviews.actions'
import { postReview } from '../../store/Reviews/reviews.api'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import { Button } from '../Button'
import { Slider } from '@mui/material'
import { API_BASEURL, theme } from '../../../appConfig'
import axios from 'axios'

const AddReview = ({
  project,
  toggleOverlay,
  addReviewState,
  isEditing,
  setAddReviewState,
  toggleIsEditing,
}) => {
  const [space, setSpace] = useState({ judgingCriterias: ['', '', '', '', ''] })
  const handleChange = (e) => {
    setAddReviewState({
      ...addReviewState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async () => {
    // if (isEditing) {
    //   await store.dispatch(putReview(addReviewState.id, addReviewState))
    //   toggleIsEditing()
    // } else {
    await store.dispatch(postReview(addReviewState))
    // }
    toggleOverlay()
    setAddReviewState({})
  }
  const getJudgingCriteria = async () => {
    try {
      const { data } = await axios.get(`${API_BASEURL}spaces/${addReviewState.space}`)
      setSpace(data)
    } catch (error) {}
  }
  useEffect(() => {
    getJudgingCriteria()
  }, [])

  return (
    <>
      <div
        className="flex flex-col h-96 overflow-scroll rounded-md p-4 "
        style={{
          boxShadow: 'inset 0 0 5px #c4c4c4',
        }}
      >
        <div className="mb-6">
          You are now reviewing{' '}
          <Link href={`/project/${project.id}`}>
            <span
              onClick={toggleOverlay}
              className="hover:text-purple font-bold cursor-pointer"
            >
              {project.title}
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="font-bold flex-1 w-full py-2">{space.judgingCriterias[0]}</div>
          <div className="w-1/2 ml-6">
            <ThemeProvider theme={theme}>
              <Slider
                name="criteriaOne"
                onChange={handleChange}
                valueLabelDisplay="auto"
                defaultValue={0}
                value={addReviewState.criteriaOne}
                min={0}
                max={10}
                step={1}
                color="primary"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold flex-1 w-full py-2">{space.judgingCriterias[1]}</div>
          <div className="w-1/2 ml-6">
            <ThemeProvider theme={theme}>
              <Slider
                defaultValue={0}
                name="criteriaTwo"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={addReviewState.criteriaTwo}
                min={0}
                max={10}
                step={1}
                color="primary"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold flex-1 w-full py-2">{space.judgingCriterias[2]}</div>
          <div className="w-1/2 ml-6">
            <ThemeProvider theme={theme}>
              <Slider
                defaultValue={0}
                name="criteriaThree"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={addReviewState.criteriaThree}
                min={0}
                max={10}
                step={1}
                color="primary"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold flex-1 w-full py-2">{space.judgingCriterias[3]}</div>
          <div className="w-1/2 ml-6">
            <ThemeProvider theme={theme}>
              <Slider
                defaultValue={0}
                name="criteriaFour"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={addReviewState.criteriaFour}
                min={0}
                max={10}
                step={1}
                color="primary"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold flex-1 w-full py-2">{space.judgingCriterias[4]}</div>
          <div className="w-1/2 ml-6">
            <ThemeProvider theme={theme}>
              <Slider
                defaultValue={0}
                name="criteriaFive"
                onChange={handleChange}
                valueLabelDisplay="auto"
                value={addReviewState.criteriaFive}
                min={0}
                max={10}
                step={1}
                color="primary"
              />
            </ThemeProvider>
          </div>
        </div>
        <div className="flex flex-col w-2/3 mt-4">
          <textarea
            placeholder={space.feedbackQuestion}
            style={{
              resize: 'none',
            }}
            className="h-36 border-2 border-dark p-4 rounded-md"
            name="feedback"
            onChange={handleChange}
            value={addReviewState.feedback}
          />
        </div>
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Submit"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

const mapStateToProps = (addReviewState) => {
  return {
    addReviewState: addReviewState.reviews.addReviewState,
    isEditing: addReviewState.reviews.isEditing,
    connectedUser: addReviewState.user.data.connectedUser,
    isLoading: addReviewState.reviews.loading,
    error: addReviewState.reviews.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    setAddReviewState: (addReviewState) => dispatch(setAddReviewState(addReviewState)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
