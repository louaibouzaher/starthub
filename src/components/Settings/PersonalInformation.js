import React, { useState } from 'react'
import { connect } from 'react-redux'
import UserAvatar from '../../assets/images/UserAvatar'
import Download from '../../assets/icons/Download'
import { tailwindToHex } from '../../../tailwindColors'
import Delete from '../../assets/icons/Delete'
import tailwindConfig from '../../../tailwind.config'
import { setSettingsState } from '../../store/User/user.actions'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import ConfirmPicture from './ConfirmPicture'
import OverlayWindow from '../OverlayWindow'

function PersonalInformation({
  setSettingsState,
  settingsState,
  changeChild,
  toggleOverlay,
}) {
  const [file, setFile] = useState(null)
  const handleChange = (e) => {
    setSettingsState({ ...settingsState, [e.target.name]: e.target.value })
  }
  const handleFile = (e) => {
    setFile(e.target.files[0])
    changeChild(<ConfirmPicture file={e.target.files[0]} />)
    toggleOverlay()
  }

  return (
    <div className="text-dark text-sm w-full flex flex-col justify-start items-start">
      <div className="flex items-center">
        <UserAvatar sizing className={'h-40 w-40'} link={settingsState.picture} />
        <div className="ml-10 flex flex-col justify-start">
          <div>
            <input
              accept="image/*"
              type="file"
              id="profilePicture"
              className="hidden"
              onChange={(e) => {
                console.log('onChange')
                handleFile(e)
              }}
            />
            <label
              for="profilePicture"
              className="cursor-pointer flex h-10  my-2 p-2 border-2 rounded-md border-purple text-center text-purple justify-center items-center"
            >
              <Download
                className="rotate-180 scale-75"
                color={tailwindConfig.theme.extend.colors.purple}
              />
              Upload New Picture
            </label>
          </div>
          <div className="my-2 cursor-pointer flex justify-start items-center text-red-600 py-2 px-4 rounded-md max-h-8">
            <Delete className="scale-75" color={tailwindToHex('red-600')} />
            <div>Delete Picture</div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2 mt-6">
          <div>First Name</div>
          <input
            value={settingsState.firstName}
            type="text"
            className="border-2 border-dark p-1 rounded-md"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 mt-6">
          <div>Last Name</div>
          <input
            value={settingsState.lastName}
            type="text"
            className="border-2 border-dark p-1 rounded-md"
            name="lastName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-1/2 mt-6 pr-10">
          <div>Biography</div>
          <textarea
            value={settingsState.biography}
            style={{
              resize: 'none',
            }}
            className="h-28 w-full border-2 border-dark p-1 rounded-md"
            name="biography"
            onChange={handleChange}
          />
        </div>
        <div className="w-1/2 mt-6">
          <div>Position</div>
          <input
            value={settingsState.position}
            type="text"
            className="border-2 border-dark p-1 rounded-md"
            name="position"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-1/2 mt-6">
        <div>Location</div>
        <input
          value={settingsState.location}
          type="text"
          className="border-2 border-dark p-1 rounded-md"
          name="location"
          onChange={handleChange}
        />
      </div>
      <div className="w-full mt-10">
        <div className="text-lg">Social Links</div>
        <div className="w-full flex items-center">
          <div className="w-1/2 mt-2">
            <div>LinkedIn</div>
            <input
              value={settingsState.linkedInUrl}
              type="text"
              className="border-2 border-dark p-1 rounded-md w-3/4"
              name="linkedInUrl"
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 mt-2">
            <div>Twitter</div>
            <input
              value={settingsState.twitterUrl}
              type="text"
              className="border-2 border-dark p-1 rounded-md w-3/4"
              name="twitterUrl"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-1/2 mt-2">
          <div>Website</div>
          <input
            value={settingsState.websiteUrl}
            type="text"
            className="border-2 border-dark p-1 rounded-md w-3/4"
            name="websiteUrl"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
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
    changeChild: (newChild) => dispatch(changeChild(newChild)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation)
