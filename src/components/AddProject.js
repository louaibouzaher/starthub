import React, { useState } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { setAddProjectState, toggleIsEditing } from '../store/Projects/projects.actions'
import { putProject, postProject } from '../store/Projects/projects.api'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import StepTwo from './AddProject/StepTwo'
import StepOne from './AddProject/StepOne'
import { Uploader, Downloader } from '../firebase/Helpers'

const AddProject = ({
  toggleOverlay,
  setSubmitted,
  state,
  isEditing,
  setAddProjectState,
  toggleIsEditing,
  connectedUser,
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

  const handleSubmit = async () => {
    const videoRef = state.file ? await Uploader(state.file, true) : null
    const videoLink = state.file ? await Downloader(videoRef) : null

    const formatedDate =
      (state.establishedOn?.getYear() % 100) +
      2000 +
      '-' +
      ((state.establishedOn?.getMonth() < 9 ? '0' : '') +
        (state.establishedOn?.getMonth() + 1)) +
      '-' +
      state.establishedOn?.getDate()
    console.log(formatedDate)
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
          establishedOn: formatedDate,
          user: connectedUser,
          video: videoLink || state.video,
        })
      )
    }
    setStep(0)
    toggleOverlay()
    setAddProjectState({})
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    setAddProjectState: (newState) => dispatch(setAddProjectState(newState)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
