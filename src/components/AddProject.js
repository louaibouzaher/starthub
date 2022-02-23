import React, { useState } from 'react'
import { connect } from 'react-redux'

import { connectedUser } from '../data/user'
import { addProject } from '../store/Projects/projects.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import StepTwo from './AddProject/StepTwo'
import StepOne from './AddProject/StepOne'
import { Uploader, Downloader } from '../firebase/Helpers'

const AddProject = ({ addProject, toggleOverlay, setSubmitted }) => {
  const [step, setStep] = useState(0)
  const [Project, setProject] = useState({
    title: '',
    description: '',
    tags: '',
    video: null,
    isEstablished: true,
    establishedOn: new Date(),
    estimatedCapital: 0,
    location: null,
  })
  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    setProject({
      ...Project,
      [e.target.name]: e.target.value,
    })
  }

  const handleFile = (e) => {
    setProject({ ...Project, file: e.target.files[0] })
  }

  const handleSubmit = async () => {
    const videoRef = Project.file ? await Uploader(Project.file, true) : null
    const videoLink = Project.file ? await Downloader(videoRef) : null

    addProject({
      ...Project,
      time: new Date().toUTCString(),
      user: connectedUser,
      video: videoLink || Project.video,
    })
    setStep(0)
    toggleOverlay()
    setProject({})
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
          Project={Project}
          setProject={setProject}
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
          Project={Project}
          setProject={setProject}
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
    posts: state.posts,
    overlayWindow: state.overlayWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProject: (project) => dispatch(addProject(project)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
