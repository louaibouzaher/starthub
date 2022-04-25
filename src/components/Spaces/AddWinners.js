import React, { useState } from 'react'
import store from '../../store'
import { connect } from 'react-redux'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Button } from '../Button'
import { toggleOverlay } from '../../store/OverlayWindow/overlayWindow.actions'
import { API_BASEURL } from '../../../appConfig'
import axios from 'axios'
import { putSpace } from '../../store/Spaces/spaces.api'
function AddWinners({ toggleOverlay, projects, currentSpace }) {
  const [state, setState] = useState({
    firstWinner: {},
    secondWinner: {},
    thirdWinner: {},
  })
  const list = projects.map((p) => {
    return { label: p.title, code: p.id }
  })

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(`${API_BASEURL}spaces/${currentSpace}`)
      data.participants = data.participants.map((p) => p.user.id)
      data.judges = data.judges.map((j) => j.user.id)
      store.dispatch(
        putSpace(data.id, {
          ...data,
          firstWinnerId: state.firstWinner,
          secondWinnerId: state.secondWinner,
          thirdWinnerId: state.thirdWinner,
        })
      )
      toggleOverlay()
    } catch (error) {}
  }

  return (
    <div>
      <div className="flex flex-col w-1/2 mt-4">
        <label> First Winner </label>
        <Autocomplete
          disablePortal
          id="combo-box-Project"
          options={list}
          sx={{ width: 300 }}
          value={state?.firstWinner?.title}
          onChange={(e, v) => setState({ ...state, firstWinner: v.code })}
          renderInput={(params) => <TextField {...params} />}
        />{' '}
      </div>
      <div className="flex flex-col w-1/2 mt-4">
        <label> Second Winner </label>
        <Autocomplete
          disablePortal
          id="combo-box-Project"
          options={list}
          sx={{ width: 300 }}
          value={state?.secondWinner?.title}
          onChange={(e, v) => setState({ ...state, secondWinner: v.code })}
          renderInput={(params) => <TextField {...params} />}
        />{' '}
      </div>
      <div className="flex flex-col w-1/2 mt-4">
        <label> Third Winner </label>
        <Autocomplete
          disablePortal
          id="combo-box-Project"
          options={list}
          sx={{ width: 300 }}
          value={state?.thirdWinner?.title}
          onChange={(e, v) => {
            setState({ ...state, thirdWinner: v.code })
          }}
          renderInput={(params) => <TextField {...params} />}
        />{' '}
      </div>
      <div className="absolute flex flex-row mt-10 right-8 bottom-8">
        <Button
          label="Cancel"
          btnStyle="border-2 border-dark mx-2"
          onClick={() => toggleOverlay()}
        />
        <Button
          label="Submit"
          btnStyle="bg-purple text-white border-2 border-purple mx-2"
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isOverlayOpen: state.overlayWindow.isOpen,
    projects: state.projects.list,
    currentSpace: state.spaces.currentSpace,
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOverlay: () => dispatch(toggleOverlay()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWinners)
