import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'
import { Avatar } from '@mui/material'
import Download from '../../assets/icons/Download'
import { tailwindToHex } from '../../../tailwindColors'
import Delete from '../../assets/icons/Delete'
import tailwindConfig from '../../../tailwind.config'

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
      <div className="flex items-center">
        <Avatar sx={{ width: 180, height: 140 }} variant="square">S</Avatar>
        <div className="ml-10 flex flex-col justify-start">
          <div>
            <input
              accept="image/*"
              type="file"
              id="spacePicture"
              className="hidden"
              onChange={(e) => {
                console.log('onChange')
                handleFile(e)
              }}
            />
            <label
              for="spacePicture"
              className="cursor-pointer flex h-10  my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
            >
              <Download
                className="rotate-180 scale-75"
                color={tailwindConfig.theme.extend.colors.purple}
              />
              Upload New Space Picture
            </label>
          </div>
          <div className="my-2 cursor-pointer flex justify-start items-center text-red-600 py-2 px-4 rounded-md max-h-8">
            <Delete className="scale-75" color={tailwindToHex('red-600')} />
            <div>Delete Picture</div>
          </div>
        </div>
      </div>
    </>
  )
}
