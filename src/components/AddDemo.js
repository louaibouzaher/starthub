import React, { useState } from 'react'
import { Button } from './Button'
import ButtonArrow from '../assets/icons/ButtonArrow'
import { tailwindToHex } from '../../tailwindColors'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { countries } from '../data/countries'

export const AddDemo = () => {
  const [file, setFile] = useState(null)
  const [showYoutube, setShowYoutube] = useState(false)
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
      <div className="flex flex-col w-1/2 mt-4">
        <label> Location </label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={countries}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Select a country" />}
        />{' '}
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
            <ButtonArrow
              // color={tailwindToHex('red-700')}
              color="gray"
              className={showYoutube ? ' rotate-180 ' : ''}
            />
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
  )
}
