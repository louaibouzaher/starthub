import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMySpaces } from '../../store/Spaces/spaces.api'

import SpaceSettingsCard from './SpaceSettingsCard'
import store from '../../store'
import Loader from '../Loader'

const MySpaces = ({ loading, mySpaces }) => {
  useEffect(() => {
    store.dispatch(getMySpaces())
  }, [])

  return (
    <div className="flex flex-col justify-center ">
      {loading && <Loader />}
      {mySpaces?.map((space) => (
        <SpaceSettingsCard space={space} />
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    mySpaces: state.spaces.mySpacesList,
    loading: state.spaces.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MySpaces)
