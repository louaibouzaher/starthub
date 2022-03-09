import React from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'

export default function StepOne({ setSpace, Space, toggleOverlay, setStep }) {
  return (
    <>
      <div className="flex flex-col ">
        <form>
          <div class="flex flex-col justify-center items-center bg-white px-10 py-8 border-2 border-dark rounded-xl w-full shadow-md max-w mt-10">
            <div>
              <h1 class="text-center mb-6 text-2xl font-bold  text-dark">
                Create Your Own Space
              </h1>
              <h2 className="font-bold">Space Information:</h2>

              <div>
                <label for="fname" class="block mb-1 text-dark ">
                  Space Title
                </label>
                <input
                  name="Title"
                  type="text"
                  class="bg-indigo-50 px-4 py-2 border-2 border-dark outline-none rounded-md w-full"
                />
              </div>

              <div className="mt-2">
                <label for="TextArea" class="block mb-1 text-dark ">
                  Space-Description
                </label>
                <textarea
                  className="h-44 border-2 border-dark p-4 rounded-md bg-indigo-50  w-full"
                  placeholder="Provide clear and consise description of your space."
                  name="description"
                />
              </div>
            </div>
            
            <div className=" flex flex-row">
              
              <Link href="/">
                  <Button label="Cancel" 
                  btnStyle={'border-2 border-dark mx-2 w-fit mr-20'} />
                </Link>
              <Button
                label="Next"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={() => setStep(1)}
              />
            </div>
          </div>
        </form>
      </div> 
      </>
  )
}
