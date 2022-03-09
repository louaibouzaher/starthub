import React, { useState } from 'react'
import Head from 'next/head'
import SpaceMainImage from '../src/assets/images/SpaceMainImage'
import StepOne from '../src/components/CreateSpace/StepOne'
import StepTwo from '../src/components/CreateSpace/StepTwo'
import StepThree from '../src/components/CreateSpace/StepThree'
import StepFour from '../src/components/CreateSpace/StepFour'
const Createspace = ({
  toggleOverlay,
  setCreateSpaceState,
}) => {
  const [step, setStep] = useState(0)
  const [state, setState] = useState({})
  const [state2, setStateEnd]=useState({})
  const handleChange = (e) => {
    setCreateSpaceState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
  }
  return (
    <>
      <Head>
        <title>Create A Space</title>
      </Head>
      <div class="h-screen w-full text-dark bg-purple flex flex-col justify-center items-center ">
        <div className=" w-4.5 h-12 scale-120">
          <SpaceMainImage className={' justify-center items-center  '} />
        </div>
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
      </div>
    </>
  )
}

export default Createspace
