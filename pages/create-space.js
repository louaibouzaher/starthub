import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Button } from '../src/components/Button'
import Link from 'next/link'
import SpaceWhiteImage from '../src/assets/images/SpaceWhiteImage'
import StepOne from '../src/components/CreateSpace/StepOne'
import StepTwo from '../src/components/CreateSpace/StepTwo'
import StepThree from '../src/components/CreateSpace/StepThree'
import StepFour from '../src/components/CreateSpace/StepFour'

import { setAddSpaceState } from '../src/store/Spaces/spaces.actions'
import { postSpace } from '../src/store/Spaces/spaces.api'
import store from '../src/store'

const CreateSpace = ({ toggleOverlay, setAddSpaceState, addSpaceState, isConnected }) => {
  const router = useRouter()
  const [step, setStep] = useState(0)

  const handleChange = (e) => {
    setAddSpaceState({
      ...addSpaceState,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    if (!isConnected) {
      router.push('/login')
    }
  }, [isConnected])

  const handleSubmit = async () => {
    store.dispatch(postSpace(addSpaceState))
  }
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
              space={addSpaceState}
              setSpace={setAddSpaceState}
            />
          )}
          {step === 1 && (
            <StepTwo
              handleChange={handleChange}
              space={addSpaceState}
              setSpace={setAddSpaceState}
            />
          )}
          {step === 2 && (
            <StepThree
              handleChange={handleChange}
              space={addSpaceState}
              setSpace={setAddSpaceState}
            />
          )}
          {step === 3 && (
            <StepFour
              handleChange={handleChange}
              space={addSpaceState}
              setSpace={addSpaceState}
              handleSubmit={handleSubmit}
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
                  onClick={handleSubmit}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    addSpaceState: state.spaces.addSpaceState,
    isConnected: state.user.isConnected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddSpaceState: (state) => {
      dispatch(setAddSpaceState(state))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpace)
