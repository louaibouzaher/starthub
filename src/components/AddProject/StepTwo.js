import React, { useState } from 'react'
import { Button } from '../Button'
import { countries } from '../../data/countries'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { industry, labelUpload } from '../../data/general'

export default function StepTwo({
  handleSubmit,
  handleChange,
  setProject,
  Project,
  toggleOverlay,
  setStep,
}) {
  const [isDatePickerDisabled, setIsDatePickerDisabled] = useState(false)

  const handleLocation = (e, newValue, reason) => {
    setProject({ ...Project, location: newValue })
  }
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex flex-col w-1/2 mt-4">
          <label> Industry </label>
          <Autocomplete
            disablePortal
            id="combo-box-Project"
            options={industry}
            sx={{ width: 300 }}
            value={Project.industry}
            onChange={(e) => setProject({ ...Project, industry: e.target.innerHTML })}
            renderInput={(params) => <TextField {...params} label="Select an industry" />}
          />{' '}
        </div>
        <div className="flex w-full justify-start items-center mt-6">
          <label className="mr-4">My startup was established on</label>{' '}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              disabled={isDatePickerDisabled}
              label="Select Date"
              inputFormat="yyyy/MM/dd"
              value={
                (new Date(Project.establishedOn)?.getYear() % 100) +
                2000 +
                '/' +
                (new Date(Project.establishedOn)?.getMonth() + 1) +
                '/' +
                new Date(Project.establishedOn)?.getDate()
              }
              onChange={(newValue) => setProject({ ...Project, establishedOn: newValue })}
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
            value={Project.estimatedCapital}
            onChange={handleChange}
          />
          <span>$</span>
        </div>
        <div className="flex w-full items-center mt-4">
          <div className="mr-4 min-w-max">Number Of Employees</div>
          <input
            type="number"
            className="w-1/4 border-2 border-dark p-2 rounded-md mx-1 text-purple text-center"
            name="numberOfEmployees"
            value={Project.numberOfEmployees}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-1/2 mt-4">
          <label> Location </label>
          <Autocomplete
            disablePortal
            id="combo-box-Project"
            options={countries}
            sx={{ width: 300 }}
            value={Project.location}
            onInputChange={handleLocation}
            renderInput={(params) => <TextField {...params} label="Select a country" />}
          />{' '}
        </div>
      </div>

      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Previous"
          btnStyle="bg-white text-purple border-2 border-purple mx-2"
          onClick={() => setStep(0)}
        />
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => {
            setStep(0)
            toggleOverlay()
          }}
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
