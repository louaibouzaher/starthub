import React, { useState } from 'react'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { countries } from '../../../data/countries'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'

export default function StepTwo({ space, handleChange, setSpace }) {
  const [isDatePickerDisabled] = useState(false)
  const handleLocation = (e, newValue, reason) => {
    setSpace({ ...space, location: newValue })
  }
  return (
    <>
      <div className="my-2 font-bold text-dark">Start Date</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          disabled={isDatePickerDisabled}
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={space.startsOn}
          onChange={(v) => {
            setSpace({ ...space, startsOn: v })
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className="my-2 font-bold text-dark">End Date</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          disabled={isDatePickerDisabled}
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={space.endsOn}
          onChange={(newvalue) => {
            setSpace({ ...space, endsOn: newvalue })
          }}
          renderInput={(param) => <TextField {...param} />}
        />
      </LocalizationProvider>
      <div className="my-2 font-bold text-dark">Location</div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={countries}
        sx={{ width: '40%' }}
        value={space.location}
        onInputChange={handleLocation}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            <div>{option.label}</div>
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select a country" />}
      />
    </>
  )
}
