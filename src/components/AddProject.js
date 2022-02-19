import React, { useState } from 'react'
import { connect } from 'react-redux'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { connectedUser } from '../data/user'
import { addProject } from '../store/Projects/projects.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'
import ButtonArrow from '../assets/icons/ButtonArrow'
import { countries } from '../data/countries'
import StepTwo from './AddProject/StepTwo'
import StepOne from './AddProject/StepOne'

const AddProject = ({ addProject, toggleOverlay }) => {
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
    console.log(Project)
    setProject({
      ...Project,
      [e.target.name]: e.target.value,
    })
  }

  const handleFile = (e) => {
    console.log(e)
    setProject({ ...Project, video: e.target.files[0] })
    // TODO: Upload file and send it to backend
    // const fr = new FileReader()
    // fr.onload = () => {
    // }
  }

  const handleSubmit = () => {
    addProject({ ...Project, time: new Date().toUTCString(), user: connectedUser })
    setStep(0)
    toggleOverlay()
  }

  return (
    <>
      {step === 0 && (
        <StepOne
          handleChange={handleChange}
          Project={Project}
          setProject={setProject}
          setStep={setStep}
          toggleOverlay={toggleOverlay}
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
