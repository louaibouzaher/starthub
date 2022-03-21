import React, { useState } from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { setAddProjectState, toggleIsEditing } from '../store/Projects/projects.actions'
import { putProject, postProject } from '../store/Projects/projects.api'
import { changeChild, toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import StepTwo from './AddProject/StepTwo'
import StepOne from './AddProject/StepOne'
import { Uploader, Downloader } from '../firebase/Helpers'
import Loader from './Loader'

const AddProject = ({
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
          space: 1,
          establishedOn: formatedDate,
          user: connectedUser,
          video: videoLink || state.video,
        })
      )
    }
    toggleOverlay()
    toggleOverlay()
    if (error && !isLoading) {
      changeChild(<div>{JSON.stringify(error.message)}</div>)
    } else if (!error && !isLoading) {
      changeChild(<div>Successfully Posted ✅</div>)
    }
    setTimeout(() => {
      toggleOverlay()
    }, 2000)

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
