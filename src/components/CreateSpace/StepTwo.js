import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete'
import { countries } from '../../data/countries'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'

export default function StepTwo({
  setSpaceE,
  setSpace,
  Space2,
  Space,
  setStep,
}) {
  const [isDatePickerDisabled] = useState(false)

  return (
    <>
      <div className="flex flex-col ">
        <form>
          <div class="flex flex-col justify-center items-center bg-white px-10 py-8 border-2 border-dark rounded-xl w-full shadow-md max-w mt-10">
            <div>
              <h1 class="text-center mb-6 text-2xl font-bold  text-dark">
                Create Your Own Space
              </h1>
              <h2 className="font-bold text-xl">Space Duration:</h2>

              <div className="w-full my-2 p-4  shadow-md rounded-md ">
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
                  sx={{ width: '95%' }}
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
                  renderInput={(params) => (
                    <TextField {...params} label="Select a country" />
                  )}
                />
              </div>
            </div>
            <div className=" flex flex-row w-fit">
            <Link href="/">
                <Button label="Cancel" btnStyle={'border-2 border-dark mx-2 w-fit'} />
              </Link>
              <Button
                label="Previous"
                btnStyle="bg-white text-purple border-2 border-purple"
                onClick={() => setStep(0)}
              />
              <Button
                label="Next"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={() => setStep(2)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
