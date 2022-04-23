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
        <div className="flex  items-center">
          {' '}
          <label for="prize" class="block mr-4 text-dark ">
            Prize
          </label>
          <input
            value={space.prize}
            min={0}
            name="prize"
            type="number"
            class="w-32 bg-indigo-50 px-4 py-2 border-2 border-dark outline-none rounded-md"
            onChange={handleChange}
          />
        </div>
        <h2 className="font-bold text-xl my-6">{`Add Some Rules & Regulations`}</h2>
        <textarea
          style={{
            resize: 'none',
          }}
          value={space.rules}
          className="h-52 border-2 border-dark p-4 rounded-md bg-indigo-50  w-full ui placeholder"
          placeholder={`Provide clear and consise rules & regulations concerning your space`}
          name="rules"
          onChange={handleChange}
        />
      </div>
    </>
  )
}
