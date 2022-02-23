import React, { useState } from 'react'
import { connect } from 'react-redux'

import { connectedUser } from '../data/user'
import { addPost } from '../store/Posts/posts.actions'
import { toggleOverlay } from '../store/OverlayWindow/overlayWindow.actions'
import { Button } from './Button'
import { Downloader, Uploader } from '../firebase/Helpers'

const AddPost = ({ addPost, toggleOverlay, setSubmitted }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    picture: null,
    file: null,
  })
  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleFile = (e) => {
    setPost({ ...post, file: e.target.files[0] })
  }

  const handleSubmit = async () => {
    const pictureRef = post.file ? await Uploader(post.file) : null
    const pictureLink = post.file ? await Downloader(pictureRef) : null

    addPost({
      ...post,
      time: new Date().toUTCString(),
      user: connectedUser,
      picture: pictureLink,
    })

    toggleOverlay()
    setPost({})
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
          <div className="mx-2 text-xs"> {post.file?.name || labelUpload}</div>
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
    posts: state.posts,
    overlayWindow: state.overlayWindow,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
