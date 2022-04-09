import React from 'react'
import { connect } from 'react-redux'
import { setSettingsState } from '../../store/User/user.actions'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import { Button } from '../Button'
import { Downloader, Uploader } from '../../firebase/Helpers'
import Loader from '../Loader'

const ConfirmPicture = ({
  file,
  setSettingsState,
  settingsState,
  toggleOverlay,
  changeChild,
}) => {
  const handleSubmit = async () => {
    changeChild(<Loader />)
    const pictureRef = file ? await Uploader(file) : null
    const pictureLink = file ? await Downloader(pictureRef) : null
    setSettingsState({ ...settingsState, picture: pictureLink })
    toggleOverlay()
  }
  return (
    <>
      <div className="flex flex-col">
        <div>Do you want to upload this picture?</div>
        <div className="w-full flex justify-center py-4">
          <div
            style={{
              backgroundImage: 'url(' + URL.createObjectURL(file) + ')',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: 300,
              width: 300,
            }}
            className="flex justify-center rounded-full shadow-sm items-center p-10 "
          ></div>
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
    changeChild: (newChild) => dispatch(changeChild(newChild)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPicture)
