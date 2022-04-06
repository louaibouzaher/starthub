import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Button } from './Button'
import Link from 'next/link'
import StepOne from './CreateSpace/StepOne'
import StepTwo from './CreateSpace/StepTwo'
import StepThree from './CreateSpace/StepThree'
import StepFour from './CreateSpace/StepFour'
import { putspace, postSpace } from '../store/Spaces/spaces.api'
import store from '../store'
import Loader from './Loader'
import { setAddSpaceState, toggleIsEditing } from '../store/Spaces/spaces.actions'
import { changeChild, toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'

const AddSpace = ({
  space,
  state,
  toggleOverlay,
  setAddSpaceState,
  addSpaceState,
  isEditing,
  toggleIsEditing,
  changeChild,
}) => {
  const router = useRouter()
  const [step, setStep] = useState(0)

  const handleChange = (e) => {
    setAddSpaceState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async () => {
    changeChild(<Loader />)
    if (isEditing) {
      store.dispatch(
        putspace(state, {
          ...state,
        })
      )
      toggleIsEditing()
    } else {
      await store.dispatch(
        postSpace({
          ...state,
          space: space,
        })
      )
    }
    toggleOverlay()
    setAddSpaceState({})
  }
  return (
    <>
      <div className=" h-screen w-full mt-40 bg-white shadow-lg p-10 pb-20 rounded-lg flex flex-col justify-center items-start">
        {step === 0 && (
          <StepOne
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={setAddSpaceState}
            toggleOverlay={toggleOverlay}
          />
        )}
        {step === 1 && (
          <StepTwo
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={setAddSpaceState}
            toggleOverlay={toggleOverlay}
          />
        )}
        {step === 2 && (
          <StepThree
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={setAddSpaceState}
            toggleOverlay={toggleOverlay}
          />
        )}
        {step === 3 && (
          <StepFour
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={addSpaceState}
            toggleOverlay={toggleOverlay}
            handleSubmit={handleSubmit}
          />
        )}
        <div className=" flex flex-row bottom-10 mt-5 right-10">
          <Button
            label="Cancel"
            btnStyle={'border-2 border-dark mx-2 '}
            onClick={toggleOverlay}
          />

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
            <Link href="settings/" passHref>
              <Button
                label="Submit"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={handleSubmit}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    addSpaceState: state.spaces.addSpaceState,
    isConnected: state.user.isConnected,
    isLoading: state.spaces.loading,
    isEditing: state.spaces.isEditing,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setAddSpaceState: (state) => {
      dispatch(setAddSpaceState(state))
    },
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpace)
