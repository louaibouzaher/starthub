import React, { useState } from 'react'
import { connect } from 'react-redux'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import { connectedUser } from '../data/user'
import { addProject } from '../store/Projects/projects.actions'
import { toggleOverlay } from '../store/overlayWindow/overlayWindow.actions'
import { Button } from './Button'
import ButtonArrow from '../assets/icons/ButtonArrow'
import { countries } from '../data/countries'

const AddProject = ({ addProject, toggleOverlay }) => {
  const [step, setStep] = useState(0)

  const [Project, setProject] = useState({
    title: '',
    description: '',
    tags: '',
    video: null,
    showYoutube: false,
    youtubeLink: null,
    isEstablished: true,
    establishedOn: new Date(),
    estimatedCapital: 0,
    location: null,
  })
  const [file, setFile] = useState(null)
  const [showYoutube, setShowYoutube] = useState(false)
  const [isDatePickerDisabled, setIsDatePickerDisabled] = useState(false)

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
    toggleOverlay()
  }

  const labelUpload = 'Seems empty here 🤔'
  return (
    <>
      {step === 0 && (
        <div className="flex flex-col">
          <div className="flex flex-col w-1/2">
            <label>Title</label>
            <input
              type="text"
              className="border-2 border-dark p-2 rounded-md"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-2/3 mt-4">
            <label>Description</label>
            <textarea
              style={{
                resize: 'none',
              }}
              className="h-36 border-2 border-dark p-4 rounded-md"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-1/2 mt-4">
            <label>Tags</label>
            <p className="font-light text-xs">Provide values separated by commas.</p>
            <input
              type="text"
              className="border-2 border-dark p-2 rounded-md"
              name="tags"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-row items-center mt-2">
            <input
              accept="video/*"
              type="file"
              className="hidden"
              name="file"
              onChange={handleFile}
            />
            <label
              for="file"
              className="cursor-pointer h-10 w-1/3 mt-4 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
            >
              Upload a video
            </label>
            <div className="mx-2 text-xs"> {file?.name || labelUpload}</div>
          </div>

          <div>
            <Button
              label="YouTube Link"
              btnStyle=" text-gray-500 mt-4 "
              name="showYoutube"
              onClick={() => setShowYoutube(!showYoutube)}
              Icon={() => (
                <ButtonArrow color="gray" className={showYoutube ? ' rotate-180 ' : ''} />
              )}
              rightIcon={false}
            />
          </div>
          {showYoutube && (
            <div className="flex flex-col w-1/2">
              <input
                type="text"
                className="border-2 border-gray-500 p-2 rounded-md"
                name="youtubeLink"
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-col w-full ">
          <div className="flex w-full justify-start items-center">
            <label className="mr-4">My startup was established on</label>{' '}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                disabled={isDatePickerDisabled}
                label="Select Date"
                inputFormat="MM/dd/yyyy"
                value={Project.establishedOn}
                onChange={(newValue) =>
                  setProject({ ...Project, establishedOn: newValue })
                }
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button
              label="Not Yet"
              btnStyle={
                'ml-4 border-2 border-purple ' +
                (isDatePickerDisabled ? 'bg-purple text-white shadow-lg' : 'text-purple')
              }
              onClick={() => {
                setProject({
                  ...Project,
                  isEstablished: !Project.isEstablished,
                  establishedOn: null,
                })
                setIsDatePickerDisabled(!isDatePickerDisabled)
              }}
            />
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="mr-4 min-w-max">Estimated Capital</div>
            <input
              type="number"
              className="border-2 border-dark p-2 rounded-md mx-1 text-purple text-center"
              name="estimatedCapital"
              onChange={handleChange}
            />
            <span>$</span>
          </div>
          <div className="flex flex-col w-1/2 mt-4">
            <label> Location </label>
            <Autocomplete
              disablePortal
              id="combo-box-Project"
              options={countries}
              sx={{ width: 300 }}
              onChange={(e) => setProject({ ...Project, location: e.target.innerHTML })}
              renderInput={(params) => <TextField {...params} label="Select a country" />}
            />{' '}
          </div>
        </div>
      )}
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Share"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
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
