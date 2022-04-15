import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { connect } from 'react-redux'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from '../components/Button'
import { countries } from '../data/countries'
import tailwindConfig from '../../tailwind.config'
import store from '../store'
import { getProjects } from '../store/Projects/projects.api'
import { industries } from '../data/general'

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

const SideBar = ({ sectionIndexer, toggleOverlay, connectedUser }) => {
  const [industriesShown, setIndustriesShown] = useState(3)
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [value, setValue] = useState([0, 5000000])
  const [numberOfEmployees, setNumberOfEmployees] = useState([0, 500])
  const [yearsInBusiness, setyearsInBusiness] = useState([0, 20])
  const [location, setLocation] = useState('')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleNumberOfEmployees = (event, newValue) => {
    setNumberOfEmployees(newValue)
  }
  const handleyearsInBusiness = (event, newValue) => {
    setyearsInBusiness(newValue)
  }

  const showMore = () => {
    const n = industriesShown + 3
    setIndustriesShown(n > industries.length ? industries.length : n)
  }

  const showLess = () => {
    const n = industriesShown - 3
    setIndustriesShown(n < industries.length ? 3 : n)
  }

  const handleCheckbox = (id) => {
    if (selectedIndustries.includes(id)) {
      setSelectedIndustries((prevSelectedIndustries) =>
        prevSelectedIndustries.filter((s) => s !== id)
      )
    } else {
      setSelectedIndustries((prevSelectedIndustries) => [...prevSelectedIndustries, id])
    }
  }

  const handleLocation = (event, newInputValue, reason) => {
    if (reason === 'clear') {
      setLocation('')
      return
    } else {
      setLocation(newInputValue)
    }
  }

  const handleReset = () => {
    store.dispatch(getProjects())
  }

  const handleSubmit = () => {
    store.dispatch(
      getProjects({
        estimatedCapital: `[${value[0]},${value[1]}]`,
        numberOfEmployees: `[${numberOfEmployees[0]},${numberOfEmployees[1]}]`,
        location: location,
        yearsInBusiness: `[${yearsInBusiness[0]},${yearsInBusiness[1]}]`,
        industry: selectedIndustries.map((id) => industries[id].title).join(','),
      })
    )
  }
  return (
    <div className="absolute left-10 z-10 px-4 pt-24 mb-10 w-1/5 min-h-screen flex flex-col justify-start items-start">
      {connectedUser?.id && (
        <Button
          onClick={() => {
            toggleOverlay()
          }}
          label={`New ${sectionIndexer?.sections[
            sectionIndexer?.selectedSection
          ]?.title?.substring(
            0,
            sectionIndexer.sections[sectionIndexer?.selectedSection]?.title.length - 1
          )}`}
          btnStyle={
            'bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
          }
        />
      )}
      {sectionIndexer?.sections[sectionIndexer?.selectedSection]?.title == 'Projects' && (
        <>
          <div className="ml-2 mt-6 text-purple font-bold">Filter Results</div>
          <div className="w-full my-2 p-4 bg-white shadow-md rounded-md text-dark">
            <div className="my-2 font-bold">Industry</div>

            {industries.slice(0, industriesShown).map((f) => {
              return (
                <div
                  key={f.id}
                  className="flex my-1 items-center"
                  onClick={() => handleCheckbox(f.id)}
                >
                  <input type={'checkbox'} checked={selectedIndustries.includes(f.id)} />
                  <span className="mx-1">{f.title}</span>
                </div>
              )
            })}
            <div className="flex space-x-3">
              {industries.length !== industriesShown && (
                <div className="font-bold text-xs mt-2 text-purple" onClick={showMore}>
                  + More Options
                </div>
              )}
              {industriesShown !== 3 && (
                <div className="font-bold text-xs mt-2 text-purple" onClick={showLess}>
                  - Less Options
                </div>
              )}
            </div>
          </div>

          <div className="w-full my-2 p-4 bg-white shadow-md rounded-md">
            <div className="my-2 font-bold text-dark">Years In Business</div>
            <ThemeProvider theme={theme}>
              <Slider
                min={0}
                max={20}
                step={1}
                getAriaLabel={() => 'Years Range'}
                value={yearsInBusiness}
                onChange={handleyearsInBusiness}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="primary"
              />
            </ThemeProvider>

            <div className="my-2 font-bold text-dark">Number of Employees</div>
            <ThemeProvider theme={theme}>
              <Slider
                min={0}
                max={500}
                step={10}
                getAriaLabel={() => 'Employees Range'}
                value={numberOfEmployees}
                onChange={handleNumberOfEmployees}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="primary"
              />
            </ThemeProvider>

            <div className="my-2 font-bold text-dark">Capital</div>
            <ThemeProvider theme={theme}>
              <Slider
                min={0}
                max={10000000}
                step={1000000}
                getAriaLabel={() => 'Capital Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                color="primary"
              />
            </ThemeProvider>
          </div>

          <div className="w-full my-2 p-4 bg-white shadow-md rounded-md">
            <div className="my-2 font-bold text-dark">Location</div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={countries}
              value={location}
              onInputChange={handleLocation}
              sx={{ width: '95%' }}
              renderInput={(params) => <TextField {...params} label="Select a country" />}
            />
          </div>
          <div className="flex">
            <Button
              btnStyle="w-1/2 bg-purple border-2 border-purple text-white hover:text-purple hover:bg-white mx-1"
              label="Apply"
              onClick={handleSubmit}
            />
            <Button
              btnStyle="w-1/2 bg-white border-2 border-purple text-purple mx-1"
              label="Reset"
              onClick={handleReset}
            />
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    overlayWindow: state.overlayWindow,
    connectedUser: state.user.data.connectedUser,
    sectionIndexer: state.sectionIndexer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
