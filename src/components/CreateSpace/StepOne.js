import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import { useRouter } from 'next/router'

export default function StepOne({setStep}) {
  const router = useRouter()

  const [state, setState] = useState({
    spaceTitle: '',
    spaceDescription: '',
  })
  const [errors, setErrors] = useState({
    spaceTitle: false,
    spaceDescription: false,
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'spaceTitle':
        if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
          setErrors({ ...errors, spaceTitle: true })
        } else {
          setErrors({ ...errors, spaceTitle: false })
        }
        break
      case 'spaceDescription':
        if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
          setErrors({ ...errors, spaceDescription: true })
        } else {
          setErrors({ ...errors, spaceDescription: false })
        }
        break
      default:
        break
    }

    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
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
                  value={state.spaceTitle}
                  name="spaceTitle"
                  type="text"
                  class="bg-indigo-50 px-4 py-2 border-2 border-dark outline-none rounded-md w-full"
                  onChange={handleChange}
                />
                <div className="text-red-600 text-sm h-4">
                  {errors.spaceTitle && 'Title is required'}
                </div>
              </div>

              <div className="mt-2">
                <label for="TextArea" class="block mb-1 text-dark ">
                  Space-Description
                </label>
                <textarea
                  className="h-44 border-2 border-dark p-4 rounded-md bg-indigo-50  w-full"
                  placeholder="Provide clear and consise description of your space."
                  name="spaceDescription"
                  onChange={handleChange}
                />
                <div className="text-red-600 text-sm h-4">
                  {errors.spaceDescription && 'Discription is required'}
                </div>
              </div>
            </div>

            <div className=" flex flex-row py-1">
              <Link href="/">
                <Button
                  label="Cancel"
                  btnStyle={'border-2 border-dark mx-2 w-fit mr-20'}
                />
              </Link>
              <Button
                label="Next"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={()=>setStep(1)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
