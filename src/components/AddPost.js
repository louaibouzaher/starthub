import React from 'react'
import { connect } from 'react-redux'

import { connectedUser } from '../data/user'
import {
  addPost,
  editPost,
  deletePost,
  setAddPostState,
  toggleIsEditing,
} from '../store/Posts/posts.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'
import { Downloader, Uploader } from '../firebase/Helpers'

const AddPost = ({
  addPost,
  setSubmitted,
  editPost,
  toggleOverlay,
  state,
  isEditing,
  setAddPostState,
  toggleIsEditing,
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
    const pictureRef = state.file ? await Uploader(state.file) : null
    const pictureLink = state.file ? await Downloader(pictureRef) : null
    if (isEditing) {
      editPost(state.id, {
        ...state,
        user: connectedUser,
        pictureLink: pictureLink || null,
      })
      toggleIsEditing()
    } else {
      addPost({
        ...state,
        user: connectedUser,
        picture: pictureLink,
      })
    }
    toggleOverlay()
    setAddPostState({})
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
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
            for="file"
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    editPost: (postId, post) => dispatch(editPost(postId, post)),
    deletePost: (postId) => dispatch(deletePost(postId)),
    toggleOverlay: () => dispatch(toggleOverlay()),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    setAddPostState: (state) => dispatch(setAddPostState(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
