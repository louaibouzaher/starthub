import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { connect } from 'react-redux'

import { toggleOverlay } from '../store/overlayWindow/overlayWindow.actions'
import { Button } from '../components/Button'
import Checkbox from '../assets/icons/Checkbox'
import Cross from '../assets/icons/Cross'
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
  // const [selectedFields, setSelectedFields] = useState([])

  const [value, setValue] = useState([200000, 5000000])
  const [age, setAge] = useState([2, 6])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleAge = (event, newValue) => {
    setAge(newValue)
  }

  return (
    <div className="absolute left-10 top-28 z-10 px-4 my-2 w-1/5 h-screen flex flex-col justify-start items-start">
      <Button
        rightIcon
        Icon={() => (
          <Cross
            color={tailwindConfig.theme.extend.colors.purple}
            className={'rotate-45'}
          />
        )}
        onClick={() => {
          toggleOverlay()
        }}
        label={`New ${section.substring(0, section.length - 1)}`}
        btnStyle={
          'bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
        }
      />
      <div className="ml-6 mt-6 text-purple font-bold">Filters</div>

      <div className="w-full my-2 p-4 bg-white shadow-md rounded-md">
        <div className="my-2 font-bold text-dark">Field</div>

        {fields.map((f) => {
          return (
            <div
              key={f.id}
              className="flex my-1"
              onClick={() => {
                console.log('Clicked ' + f.id)
              }}
            >
              <Checkbox isOn={false} /> <span className="mx-1">{f.title}</span>
            </div>
          )
        })}

        <div className="font-bold text-xs mt-2 text-purple">+ More Options</div>
      </div>

      <div className="w-full my-2 p-4 bg-white shadow-md rounded-md">
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
        <div className="my-2 font-bold text-dark">Age</div>
        <ThemeProvider theme={theme}>
          <Slider
            min={0}
            max={10}
            step={1}
            getAriaLabel={() => 'Age Range'}
            value={age}
            onChange={handleAge}
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
          sx={{ width: 300 }}
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
