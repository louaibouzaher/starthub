import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SpaceWhiteImage from '../src/assets/images/SpaceWhiteImage'
import AddSpace from '../src/components/AddSpace'
import { setAddSpaceState, toggleIsEditing } from '../src/store/Spaces/spaces.actions'
import {
  changeChild,
  toggleOverlay,
} from '../src/store/OverlayWindow/overlayWindow.actions'

const CreateSpace = ({ isConnected }) => {
  const router = useRouter()
  useEffect(() => {
    if (!isConnected) {
      router.push('/login')
    }
  }, [isConnected])

  return (
    <>
      <Head>
        <title>Create New Space</title>
      </Head>
      <div className="h-screen w-full text-dark bg-purple flex flex-col justify-start items-center ">
        <div className="fixed top-10 scale-120">
          <SpaceWhiteImage className={' justify-center items-center  '} />
        </div>

        <AddSpace />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    addSpaceState: state.spaces.addSpaceState,
    isConnected: state.user.isConnected,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpace)
