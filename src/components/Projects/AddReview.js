import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import store from '../../store'
import { setAddReviewState, toggleIsEditing } from '../../store/Reviews/reviews.actions'
import { postReview, putReview } from '../../store/Reviews/reviews.api'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import { Button } from '../Button'
import Loader from '../Loader'
const AddReview = ({
  projectReviewed = {},
  space,
  toggleOverlay,
  state,
  isEditing,
  setAddReviewState,
  toggleIsEditing,
  changeChild,
  isLoading,
  error,
}) => {
  const handleChange = (e) => {
    if (e.target.name == 'grade') {
      if (e.target.value > 10 || e.target.value < 0) {
        return
      }
    }
    setAddReviewState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    changeChild(<Loader />)
    console.log({
      ...state,
      project: projectReviewed.id,
      space: space,
    })
    if (isEditing) {
      await store.dispatch(
        putReview(state.id, {
          ...state,
        })
      )
      toggleIsEditing()
    } else {
      await store.dispatch(
        postReview({
          ...state,
          project: projectReviewed.id,
          space: space,
        })
      )
    }
    toggleOverlay()
    setAddReviewState({})
  }

  const labelUpload = 'Seems empty here 🤔'
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-6">
          You are now reviewing{' '}
          <Link href={`/project/${projectReviewed.id}`}>
            <span
              onClick={toggleOverlay}
              className="hover:text-purple font-bold cursor-pointer"
            >
              {projectReviewed.title}
            </span>
          </Link>
        </div>
        <div className="flex w-1/2 items-center">
          <input
            type="number"
            className="border-2 border-dark p-2 rounded-md w-1/2 text-center"
            name="grade"
            onChange={handleChange}
            value={state.grade}
          />
          <div className="font-bold flex-1 px-2">/ 10</div>
        </div>
        <div className="flex flex-col w-2/3 mt-4">
          <textarea
            placeholder="Provide this project with feedback"
            style={{
              resize: 'none',
            }}
            className="h-36 border-2 border-dark p-4 rounded-md"
            name="feedback"
            onChange={handleChange}
            value={state.feedback}
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

const mapStateToProps = (state) => {
  return {
    state: state.reviews.addReviewState,
    isEditing: state.reviews.isEditing,
    connectedUser: state.user.data.connectedUser,
    isLoading: state.reviews.loading,
    error: state.reviews.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    setAddReviewState: (state) => dispatch(setAddReviewState(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
