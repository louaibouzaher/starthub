import React, { useState } from 'react'

import { Avatar } from '@mui/material'
import Download from '../../assets/icons/Download'
import tailwindConfig from '../../../tailwind.config'
import { Downloader, Uploader } from '../../firebase/Helpers'

export default function StepOne({ space, handleChange, setSpace }) {
  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({
    spaceTitle: false,
    spaceDescription: false,
  })
  const handleFile = async (e) => {
    const file = e.target.files[0]
    setFile(e.target.files[0])

    const pictureRef = file ? await Uploader(file) : null
    const pictureLink = file ? await Downloader(pictureRef) : null
    console.log(file)
    console.log(pictureLink)
    setSpace({ ...space, spacePic: pictureLink })
  }
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
      <div className="flex items-center w-full">
        <div className="w-full flex justify-center py-4">
          {file && (
            <div
              style={{
                backgroundImage: 'url(' + URL.createObjectURL(file) + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: 200,
                width: 200,
              }}
              className="flex justify-center rounded-full shadow-md items-center p-10 "
            ></div>
          )}
        </div>
        <div className="ml-10 flex flex-col justify-start w-full">
          <input
            accept="image/*"
            type="file"
            id="spacePic"
            name="spacePic"
            className="hidden"
            onChange={handleFile}
          />
          <label
            for="spacePic"
            className="w-full cursor-pointer flex h-10  my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
          >
            <Download
              className="rotate-180 scale-75"
              color={tailwindConfig.theme.extend.colors.purple}
            />
            Upload Space Picture
          </label>
        </div>
      </div>
    </>
  )
}
