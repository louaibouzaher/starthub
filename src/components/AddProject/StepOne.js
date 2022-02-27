import React, { useState } from 'react'
import { Button } from '../Button'
import ButtonArrow from '../../assets/icons/ButtonArrow'
import { labelUpload } from '../../data/general'
export default function StepOne({
  handleChange,
  handleFile,
  file,
  setStep,
  Project,
  setProject,
  toggleOverlay,
}) {
  const [showYoutube, setShowYoutube] = useState(false)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-1/2">
          <label>Title</label>
          <input
            type="text"
            placeholder="What would you like to name the project?"
            className="border-2 border-dark p-2 rounded-md"
            value={Project.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-2/3 mt-4">
          <label>Description</label>
          <textarea
            style={{
              resize: 'none',
            }}
            className="h-36 border-2 border-dark p-4 rounded-md"
            placeholder="Provide clear and consise description of your idea."
            name="description"
            value={Project.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col w-1/2 mt-4">
          <label>Tags</label>
          <p className="font-light text-xs">Provide values separated by commas.</p>
          <input
            type="text"
            className="border-2 border-dark p-2 rounded-md"
            name="tags"
            value={Project.tags}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row items-center mt-2">
          <input
            accept="video/*"
            type="file"
            id="file"
            className="hidden"
            onChange={handleFile}
          />
          <label
            for="file"
            className="cursor-pointer h-10 w-1/3 my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
          >
            Upload a video
          </label>
          <div className="mx-2 text-xs"> {Project.file?.name || labelUpload}</div>
        </div>

        <div className="flex justify-start">
          <Button
            label="YouTube Link"
            btnStyle=" text-gray-500 mt-4 "
            name="showYoutube"
            onClick={() => setShowYoutube(!showYoutube)}
            Icon={() => (
              <ButtonArrow color="gray" className={showYoutube ? ' rotate-180 ' : ''} />
            )}
            rightIcon={false}
          />
        </div>
        {showYoutube && (
          <div className="flex flex-col w-1/2">
            <input
              type="text"
              className="border-2 border-gray-500 p-2 rounded-md"
              name="video"
              value={Project.video}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => {
            setStep(0)
            toggleOverlay()
          }}
        />
        <Button
          label="Next"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={() => setStep(1)}
        />
      </div>
    </>
  )
}
