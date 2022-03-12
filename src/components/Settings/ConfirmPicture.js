import React from 'react'
import { connect } from 'react-redux'
import { setSettingsState } from '../../store/User/user.actions'
import { toggleOverlay } from '../../store/OverlayWindow/overlayWindow.actions'
import { Button } from '../Button'
import { Downloader, Uploader } from '../../firebase/Helpers'

const ConfirmPicture = ({ file, setSettingsState, settingsState, toggleOverlay }) => {
  const handleSubmit = async () => {
    const pictureRef = file ? await Uploader(file) : null
    const pictureLink = file ? await Downloader(pictureRef) : null
    setSettingsState({ ...settingsState, picture: pictureLink })
    toggleOverlay()
  }
  return (
    <>
      <div className="flex flex-col">
        <div>Do you want to upload this picture?</div>
        <div
          className="w-full rounded-md shadow-sm items-center p-10"
          style={
            {
              // backgroundImage:
            }
          }
        >
          <img
            src={URL.createObjectURL(file)}
            className="w-full h-full overflow-hidden shadow-md"
          />
        </div>
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Upload"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    settingsState: state.user.data.settingsState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettingsState: (state) => dispatch(setSettingsState(state)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPicture)
