import React from 'react'
import { connect } from 'react-redux'
import UserAvatar from '../../assets/images/UserAvatar'
import Download from '../../assets/icons/Download'
import { tailwindToHex } from '../../../tailwindColors'
import Delete from '../../assets/icons/Delete'
import tailwindConfig from '../../../tailwind.config'

function PersonalInformation({ connectedUser }) {
  return (
    <div className="text-dark text-sm w-full flex flex-col justify-start items-start">
      <div className="flex items-center">
        <UserAvatar sizing className={'h-40 w-40'} link={connectedUser.picture} />
        <div className="ml-10 flex flex-col justify-start">
          <div>
            <input accept="image/*" type="file" id="file" className="hidden" />
            <label
              for="file"
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
          <div>Username</div>
          <input
            value={connectedUser.firstName + ' ' + connectedUser.lastName}
            type="text"
            className="border-2 border-dark p-1 rounded-md"
            name="username"
            // onChange={handleChange}
          />
        </div>
        <div className="w-1/2 mt-6">
          <div>Position</div>
          <input
            value={connectedUser.position}
            type="text"
            className="border-2 border-dark p-1 rounded-md"
            name="position"
            // onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-1/2 mt-6">
        <div>Biography</div>
        <textarea
          value={connectedUser.biography}
          style={{
            resize: 'none',
          }}
          className="h-28 w-full border-2 border-dark p-1 rounded-md"
          name="biography"
          // onChange={handleChange}
        />
      </div>
      <div className="w-full mt-10">
        <div className="text-lg">Social Links</div>
        <div className="w-full flex items-center">
          <div className="w-1/2 mt-2">
            <div>LinkedIn</div>
            <input
              value={connectedUser.linkedInUrl}
              type="text"
              className="border-2 border-dark p-1 rounded-md w-3/4"
              name="linkedin"
              // onChange={handleChange}
            />
          </div>
          <div className="w-1/2 mt-2">
            <div>Twitter</div>
            <input
              value={connectedUser.twitterUrl}
              type="text"
              className="border-2 border-dark p-1 rounded-md w-3/4"
              name="twitter"
              // onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message)),
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation)
