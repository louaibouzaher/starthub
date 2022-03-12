import React, { useState } from 'react'
import Head from 'next/head'
import { Button } from '../src/components/Button'
import Link from 'next/dist/client/link'
import SpaceWhiteImage from '../src/assets/images/SpaceWhiteImage'
import StepOne from '../src/components/CreateSpace/StepOne'
import StepTwo from '../src/components/CreateSpace/StepTwo'
import StepThree from '../src/components/CreateSpace/StepThree'
import StepFour from '../src/components/CreateSpace/StepFour'
const CreateSpace = ({ toggleOverlay, setCreateSpaceState }) => {
  const [step, setStep] = useState(0)
  const [state, setState] = useState({})
  const [state2, setStateEnd] = useState({})
  const handleChange = (e) => {
    setCreateSpaceState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {}
  return (
    <>
      <Head>
        <title>Create New Space</title>
      </Head>
      <div className="h-screen w-full text-dark bg-purple flex flex-col justify-start items-center ">
        <div className="fixed top-10 scale-120">
          <SpaceWhiteImage className={' justify-center items-center  '} />
        </div>
        <div
          style={{
            minHeight: 500,
          }}
          className="relative w-1/2 mt-40 bg-white shadow-lg p-10 pb-20 rounded-lg flex flex-col justify-center items-start"
        >
          {step === 0 && (
            <StepOne
              handleChange={handleChange}
              Space={state}
              setSpace={setState}
              setStep={setStep}
              toggleOverlay={toggleOverlay}
            />
          )}
          {step === 1 && (
            <StepTwo
              handleChange={handleChange}
              Space={state}
              Space2={state2}
              setSpace={setState}
              setSpaceE={setStateEnd}
              handleSubmit={handleSubmit}
              setStep={setStep}
              toggleOverlay={toggleOverlay}
            />
          )}
          {step === 2 && (
            <StepThree
              handleChange={handleChange}
              Space={state}
              setSpace={setState}
              setSpaceE={setStateEnd}
              handleSubmit={handleSubmit}
              setStep={setStep}
              toggleOverlay={toggleOverlay}
            />
          )}
          {step === 3 && (
            <StepFour
              handleChange={handleChange}
              Space={state}
              setSpace={setState}
              handleSubmit={handleSubmit}
              setStep={setStep}
              toggleOverlay={toggleOverlay}
            />
          )}
          <div className="absolute flex flex-row bottom-10 right-10">
            <Link href="/">
              <Button label="Cancel" btnStyle={'border-2 border-dark mx-2 '} />
            </Link>
            {step != 0 && (
              <Button
                label="Previous"
                btnStyle="bg-white text-purple border-2 border-purple"
                onClick={() => setStep(step - 1)}
              />
            )}
            {step != 3 && (
              <Button
                label="Next"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={() => setStep(step + 1)}
              />
            )}
            {step == 3 && (
              <Link href="space/1" passHref>
                <Button
                  label="Submit"
                  btnStyle="bg-purple text-white border-2 border-purple mx-2"
                  onClick={() => {
                    console.log('Create space')
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateSpace
