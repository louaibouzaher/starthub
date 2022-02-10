import React, { useState } from 'react'
import { Button } from './Button'
import ButtonArrow from '../assets/icons/ButtonArrow'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Slider from '@mui/material/Slider'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { countries } from '../data/countries'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import tailwindConfig from '../../tailwind.config'

const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.extend.colors.purple,
    },
  },
})

function valuetext(value) {
  return `${value}$`
}

export const AddDemo = () => {
  const [step, setStep] = useState(1)
  const [file, setFile] = useState(null)
  const [showYoutube, setShowYoutube] = useState(false)
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'))
  const [valueSlider, setValueSlider] = useState([200000, 5000000])
  const [isDatePickerDisabled, setIsDatePickerDisabled] = useState(false)

  const handleChange = (newValue) => {
    setValue(newValue)
  }

  const handleChangeSlider = (event, newValue) => {
    setValueSlider(newValue)
  }

  const handleFile = (e) => {
    console.log(e)
    setFile(e.target.files[0])
    // TODO: Upload file and send it to backend
    // const fr = new FileReader()
    // fr.onload = () => {
    // }
  }

  const labelUpload = 'Seems empty here 🤔'
  return (
    <>
      {step === 0 && (
        <div className="flex flex-col">
          <div className="flex flex-col w-1/2">
            <label>Title</label>
            <input type="text" className="border-2 border-dark p-2 rounded-md" />
          </div>
          <div className="flex flex-col w-2/3 mt-4">
            <label>Description</label>
            <textarea
              style={{
                resize: 'none',
              }}
              className="h-36 border-2 border-dark p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col w-1/2 mt-4">
            <label>Tags</label>
            <p className="font-light text-xs">Provide values separated by commas.</p>
            <input type="text" className="border-2 border-dark p-2 rounded-md" />
          </div>

          <div className="flex flex-row items-center mt-2">
            <input
              accept="video/*"
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => handleFile(e)}
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
              onClick={() => setShowYoutube(!showYoutube)}
              btnStyle=" text-gray-500 mt-4 "
              Icon={() => (
                <ButtonArrow color="gray" className={showYoutube ? ' rotate-180 ' : ''} />
              )}
              rightIcon={false}
            />
          </div>
          {showYoutube && (
            <div className="flex flex-col w-1/2">
              <input type="text" className="border-2 border-gray-500 p-2 rounded-md" />
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
                value={value}
                onChange={handleChange}
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
                setIsDatePickerDisabled(!isDatePickerDisabled)
              }}
            />
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="mr-4 min-w-max">Estimated Capital</div>
            <div className="w-full mx-4 mt-2">
              <ThemeProvider theme={theme}>
                <Slider
                  min={0}
                  max={10000000}
                  step={1000000}
                  getAriaLabel={() => 'Capital Range'}
                  value={valueSlider}
                  onChange={handleChangeSlider}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  color="primary"
                />
              </ThemeProvider>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-4">
            <label className="my-2"> Location </label>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select a country" />}
            />{' '}
          </div>
        </div>
      )}
    </>
  )
}
