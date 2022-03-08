import React from 'react'
import { connect } from 'react-redux'
import { setSettingsState } from '../../store/User/user.actions'

function AccountSecurity({ setSettingsState, settingsState }) {
  const handleChange = (e) => {
    setSettingsState({ ...settingsState, [e.target.name]: e.target.value })
  }
  return (
    <div className="text-dark text-sm w-full flex flex-col justify-start items-start">
      <div className="mt-10">
        <div>Email</div>
        <input
          value={settingsState.email}
          type="email"
          className="border-2 border-dark p-1 rounded-md"
          name="email"
          // onChange={handleChange}
        />
      </div>

      <div className="w-full mt-10">
        <div className="text-lg mb-2">Password</div>
        <div>Old Password</div>
        <div className="w-1/2 mt-2 flex items-center">
          <input
            placeholder="Type old password"
            type="password"
            className="border-2 border-dark p-1 rounded-md w-3/4 "
            name="oldPassword"
            // onChange={handleChange}
          />
        </div>

        <div className="mt-4">New Password</div>
        <div className="w-full flex items-center">
          <div className="w-1/2 mt-2">
            <input
              placeholder="Type new password"
              type="password"
              className="border-2 border-dark p-1 rounded-md w-3/4 "
              name="oldPassword"
              // onChange={handleChange}
            />
          </div>
          <div className="w-1/2 mt-2">
            <input
              placeholder="Confirm new password"
              type="password"
              className="border-2 border-dark p-1 rounded-md w-3/4"
              name="oldPasswordRepeat"
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
    settingsState: state.user.data.settingsState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettingsState: (state) => dispatch(setSettingsState(state)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSecurity)
