import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { Button } from '../Button'
import Link from 'next/link'
import StepOne from './AddSpace/StepOne'
import StepTwo from './AddSpace/StepTwo'
import StepThree from './AddSpace/StepThree'
import StepFour from './AddSpace/StepFour'
import StepFive from './AddSpace/StepFive'
import { putSpace, postSpace } from '../../store/Spaces/spaces.api'
import store from '../../store'
import { API_BASEURL } from '../../../appConfig'
import { setAddSpaceState, toggleIsEditing } from '../../store/Spaces/spaces.actions'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'

const AddSpace = ({
  toggleOverlay,
  setAddSpaceState,
  addSpaceState,
  isEditing,
  toggleIsEditing,
  changeChild,
}) => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios
      .get(API_BASEURL + `profiles/`)
      .then((result) => {
        setUsers(result.data)
      })
      .catch((e) => {})
  }, [])

  const handleCancel = () => {
    if (router.asPath.endsWith('create-competition')) {
      router.push('/feed')
    } else {
      toggleOverlay()
    }
  }

  const handleChange = (e) => {
    console.log(addSpaceState)
    setAddSpaceState({
      ...addSpaceState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async () => {
    if (isEditing) {
      store.dispatch(
        putSpace(addSpaceState.id, {
          ...addSpaceState,
        })
      )
      toggleIsEditing()
    } else {
      await store.dispatch(
        postSpace({
          ...addSpaceState,
        })
      )
    }
    handleCancel()
    setAddSpaceState({})
  }
  return (
    <>
      <div
        className=" w-full flex flex-col justify-center items-start"
        style={{
          maxHeight: '7vh',
          minHeight: 500,
        }}
      >
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
            users={users}
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={setAddSpaceState}
            toggleOverlay={toggleOverlay}
            handleSubmit={handleSubmit}
          />
        )}
        {step === 4 && (
          <StepFive
            handleChange={handleChange}
            space={addSpaceState}
            setSpace={setAddSpaceState}
            toggleOverlay={toggleOverlay}
            handleSubmit={handleSubmit}
          />
        )}
        <div className="absolute flex flex-row bottom-10 mt-5 right-10">
          <Button
            label="Cancel"
            btnStyle={'border-2 border-dark mx-2 '}
            onClick={handleCancel}
          />

          {step != 0 && (
            <Button
              label="Previous"
              btnStyle="bg-white text-purple border-2 border-purple"
              onClick={() => setStep(step - 1)}
            />
          )}
          {step != 4 && (
            <Button
              label="Next"
              btnStyle="bg-purple text-white border-2 border-purple mx-2"
              onClick={() => {
                setStep(step + 1)
              }}
            />
          )}
          {step == 4 && (
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
