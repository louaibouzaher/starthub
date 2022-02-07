import React, { useState } from 'react'

export const AddPost = () => {
  const handleFile = (e) => {
    console.log(e)
    setFile(e.target.files[0])
    // TODO: Upload file and send it to backend
    // const fr = new FileReader()
    // fr.onload = () => {
    // }
  }
  const [file, setFile] = useState(null)
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

      <div className="flex flex-row items-center mt-2">
        <input
          accept="image/*"
          type="file"
          id="file"
          className="hidden"
          onChange={(e) => handleFile(e)}
        />
        <label
          for="file"
          className="cursor-pointer h-10 w-1/3 my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
        >
          Upload an image
        </label>
        <div className="mx-2 text-xs"> {file?.name || labelUpload}</div>
      </div>
    </div>
  )
}