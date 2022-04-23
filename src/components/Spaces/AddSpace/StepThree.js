import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { ListUsers } from './ListUsers'

export default function StepThree({ space, handleChange }) {
  const [errors, setErrors] = useState({
    spaceRegulation: false,
  })

  return (
    <>
      <div className=" w-full">
        <h2 className="font-bold text-xl my-6">Add Some Rules & Regulations</h2>
        <textarea
          style={{
            resize: 'none',
          }}
          value={space.rules}
          className="h-44 border-2 border-dark p-4 rounded-md bg-indigo-50  w-full ui placeholder"
          placeholder="     Provide clear and consise rules & regulations concerning your space "
          name="rules"
          onChange={handleChange}
        />
      </div>
    </>
  )
}
