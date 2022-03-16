import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'

export default function StepOne({ space, handleChange }) {
  const [errors, setErrors] = useState({
    spaceTitle: false,
    spaceDescription: false,
  })

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case 'spaceTitle':
  //       if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
  //         setErrors({ ...errors, spaceTitle: true })
  //       } else {
  //         setErrors({ ...errors, spaceTitle: false })
  //       }
  //       break
  //     case 'spaceDescription':
  //       if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
  //         setErrors({ ...errors, spaceDescription: true })
  //       } else {
  //         setErrors({ ...errors, spaceDescription: false })
  //       }
  //       break
  //     default:
  //       break
  //   }

  //   setState({
  //     ...state,
  //     [e.target.name]: e.target.value,
  //   })
  // }
  return (
    <>
      <div>
        <label for="fname" class="block mb-1 text-dark ">
          Space Title
        </label>
        <input
          value={space.spaceTitle}
          name="title"
          type="text"
          class="bg-indigo-50 px-4 py-2 border-2 border-dark outline-none rounded-md w-full"
          onChange={handleChange}
        />
        <div className="text-red-600 text-sm h-4">
          {errors.spaceTitle && 'Title is required'}
        </div>
      </div>

      <label for="TextArea" class="block mb-1 text-dark ">
        Space Description
      </label>
      <textarea
        style={{
          resize: 'none',
        }}
        value={space.spaceDescription}
        className="h-44 border-2 border-dark p-4 rounded-md bg-indigo-50  w-full"
        placeholder="Provide clear and consise description of your space."
        name="description"
        onChange={handleChange}
      />
      <div className="text-red-600 text-sm h-4">
        {errors.spaceDescription && 'Discription is required'}
      </div>
    </>
  )
}
