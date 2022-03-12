import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import Box from '@mui/material/Box'
import Autocomplete from '@mui/material/Autocomplete'
import { countries } from '../../data/countries'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'

export default function StepTwo({ setSpaceE, setSpace, Space2, Space, setStep }) {
  const [isDatePickerDisabled] = useState(false)

  return (
    <>
      <div className="my-2 font-bold text-dark">Start Date</div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          disabled={isDatePickerDisabled}
          label="Select Date"
          inputFormat="MM/dd/yyyy"
          value={Space.establishedOn}
          onChange={(v) => {
            setSpace({ ...Space, establishedOn: v })
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
          value={Space2.establishedOn}
          onChange={(newvalue) => {
            setSpaceE({ ...Space2, establishedOn: newvalue })
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
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select a country" />}
      />
    </>
  )
}
