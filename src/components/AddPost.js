import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { setAddPostState, toggleIsEditing } from '../store/Posts/posts.actions'
import { postPost, putPost } from '../store/Posts/posts.api'
import { changeChild, toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'
import { Downloader, Uploader } from '../firebase/Helpers'
import Loader from './Loader'

const AddPost = ({
  space,
  toggleOverlay,
  state,
  isEditing,
  setAddPostState,
  toggleIsEditing,
  changeChild,
  isLoading,
  error,
}) => {
  const handleChange = (e) => {
    setAddPostState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleFile = (e) => {
    setAddPostState({ ...state, file: e.target.files[0] })
  }

  const handleSubmit = async () => {
    changeChild(<Loader />)
    const pictureRef = state.file ? await Uploader(state.file) : null
    const pictureLink = state.file ? await Downloader(pictureRef) : null
    console.log(pictureLink)
    if (isEditing) {
      await store.dispatch(
        putPost(state.id, {
          ...state,
          picture: pictureLink || null,
        })
      )
      toggleIsEditing()
    } else {
      await store.dispatch(
        postPost({
          ...state,
          space: store.getState().spaces.currentSpace,
          picture: pictureLink,
        })
      )
    }
    toggleOverlay()
    setAddPostState({})
  }

  const labelUpload = 'Seems empty here 🤔'
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col w-1/2">
          <input
            placeholder="Give your post a header"
            type="text"
            className="border-2 border-dark p-2 rounded-md"
            name="title"
            onChange={handleChange}
            value={state.title}
          />
        </div>
        <div className="flex flex-col w-2/3 mt-4">
          <textarea
            placeholder="What do you have in mind ?"
            style={{
              resize: 'none',
            }}
            className="h-36 border-2 border-dark p-4 rounded-md"
            name="content"
            onChange={handleChange}
            value={state.content}
          />
        </div>

        <div className="flex flex-row items-center mt-2">
          <input
            accept="image/*"
            type="file"
            id="file"
            className="hidden"
            onChange={handleFile}
          />
          <label
            htmlFor="file"
            className="cursor-pointer h-10 w-1/3 my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
          >
            Upload an image
          </label>
          <div className="mx-2 text-xs"> {state.file?.name || labelUpload}</div>
        </div>
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Share"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.posts.addPostState,
    isEditing: state.posts.isEditing,
    connectedUser: state.user.data.connectedUser,
    isLoading: state.posts.loading,
    error: state.posts.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    setAddPostState: (state) => dispatch(setAddPostState(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
