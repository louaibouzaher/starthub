import React, { useState } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import {
  setAddProjectState,
  toggleIsEditing,
} from '../../store/Projects/projects.actions'
import { putProject, postProject } from '../../store/Projects/projects.api'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import StepTwo from './AddProject/StepTwo'
import StepOne from './AddProject/StepOne'
import { Uploader, Downloader } from '../../firebase/Helpers'
import Loader from '../Loader'

const AddProject = ({
  space,
  toggleOverlay,
  state,
  isEditing,
  setAddProjectState,
  toggleIsEditing,
  connectedUser,
  changeChild,
  isLoading,
  error,
}) => {
  const [step, setStep] = useState(0)

  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    setAddProjectState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleFile = (e) => {
    setAddProjectState({ ...state, file: e.target.files[0] })
  }

  const handleCancel = () => {
    toggleOverlay()
    if (isEditing) toggleIsEditing()
  }

  const handleSubmit = async () => {
    changeChild(<Loader />)
    const videoRef = state.file ? await Uploader(state.file, true) : null
    const videoLink = state.file ? await Downloader(videoRef) : null
    const dateObj = new Date(state.establishedOn)
    const formatedDate =
      (dateObj?.getYear() % 100) +
      2000 +
      '-' +
      ((dateObj?.getMonth() < 9 ? '0' : '') + (dateObj?.getMonth() + 1)) +
      '-' +
      dateObj?.getDate()
    console.log(state)
    if (isEditing) {
      store.dispatch(
        putProject(state.id, {
          ...state,
          establishedOn: formatedDate,
          user: connectedUser,
          video: videoLink || state.video,
        })
      )
      toggleIsEditing()
    } else {
      store.dispatch(
        postProject({
          ...state,
          space: store.getState().spaces.currentSpace,
          establishedOn: formatedDate,
          user: connectedUser,
          video: videoLink || state.video,
        })
      )
    }
    toggleOverlay()
    setAddProjectState({})
  }

  return (
    <>
      {step === 0 && (
        <StepOne
          handleChange={handleChange}
          Project={state}
          setProject={setAddProjectState}
          setStep={setStep}
          file={file}
          setFile={setFile}
          toggleOverlay={toggleOverlay}
          handleFile={handleFile}
          handleCancel={handleCancel}
        />
      )}
      {step === 1 && (
        <StepTwo
          handleChange={handleChange}
          Project={state}
          setProject={setAddProjectState}
          handleSubmit={handleSubmit}
          setStep={setStep}
          toggleOverlay={toggleOverlay}
          handleCancel={handleCancel}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.projects.addProjectState,
    isEditing: state.projects.isEditing,
    connectedUser: state.user.data.connectedUser,
    isLoading: state.projects.loading,
    error: state.projects.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    setAddProjectState: (newState) => dispatch(setAddProjectState(newState)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
