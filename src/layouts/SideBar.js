import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { connect } from 'react-redux'

import { toggleOverlay } from '../store/overlayWindow/overlayWindow.actions'
import { Button } from '../components/Button'
import { countries } from '../data/countries'
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

const SideBar = ({ section, toggleOverlay }) => {
  const fields = [
    {
      title: 'Software Engineering',
      id: 1,
    },
    {
      title: 'Music',
      id: 2,
    },
    {
      title: 'Delivery',
      id: 3,
    },
    {
      title: 'Clothes & Shoes',
      id: 4,
    },
    {
      title: 'Packaging',
      id: 5,
    },
    {
      title: 'Machine Learning',
      id: 6,
    },
  ]
  const [fieldsShown, setFieldsShown] = useState(fields.length / 2)
  const [selectedFields, setSelectedFields] = useState([])
  const [value, setValue] = useState([200000, 5000000])
  const [numberOfEmployees, setNumberOfEmployees] = useState([20, 80])
  const [yearsInBusiness, setyearsInBusiness] = useState([2, 6])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleNumberOfEmployees = (event, newValue) => {
    setNumberOfEmployees(newValue)
  }
  const handleyearsInBusiness = (event, newValue) => {
    setyearsInBusiness(newValue)
  }

  const showMoreLess = () => {
    setFieldsShown((prevState) =>
      prevState === fields.length ? fields.length / 2 : fields.length
    )
  }

  const handleCheckbox = (id) => {
    if (selectedFields.includes(id)) {
      setSelectedFields((prevSelectedFields) =>
        prevSelectedFields.filter((s) => s !== id)
      )
    } else {
      setSelectedFields((prevSelectedFields) => [...prevSelectedFields, id])
    }
  }
  return (
    <div className="absolute left-10 z-10 px-4 pt-24 w-1/5 h-screen flex flex-col justify-start items-start">
      <Button
        onClick={() => {
          toggleOverlay()
        }}
        label={`New ${section.substring(0, section.length - 1)}`}
        btnStyle={
          'bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
        }
      />
      <div className="ml-2 mt-6 text-purple font-bold">Filter Results</div>
      <div>
        {selectedFields.map((f) => (
          <div> {fields[f - 1].title} </div>
        ))}
      </div>
      <div className="w-full my-2 p-4 bg-white shadow-md rounded-md text-dark">
        <div className="my-2 font-bold">Industry</div>

        {fields.slice(0, fieldsShown).map((f) => {
          return (
            <div
              key={f.id}
              className="flex my-1 items-center"
              onClick={() => handleCheckbox(f.id)}
            >
              <input type={'checkbox'} />
              <span className="mx-1">{f.title}</span>
            </div>
          )
        })}

        <div
          className="font-bold text-xs mt-2 text-purple"
          onClick={() => showMoreLess()}
        >
          {fieldsShown === fields.length ? '- Less Options' : '+ More Options'}
        </div>
      </div>

      <div className="w-full my-2 p-4 bg-white shadow-md rounded-md">
        <div className="my-2 font-bold text-dark">Years In Business</div>
        <ThemeProvider theme={theme}>
          <Slider
            min={0}
            max={10}
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
            max={100}
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
          sx={{ width: '95%' }}
          renderInput={(params) => <TextField {...params} label="Select a country" />}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    overlayWindow: state.overlayWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
