import {
  SPACES_LOADING,
  SPACES_FAILURE,
  ADD_SPACE,
  GET_SPACES,
  DELETE_SPACE,
  EDIT_SPACE,
  SET_ADD_SPACE_STATE,
  TOGGLE_ISEDITING,
} from './spaces.types'

export const loading = () => {
  return {
    type: SPACES_LOADING,
  }
}
export const failure = (payload) => {
  return {
    type: SPACES_FAILURE,
    payload: payload,
  }
}

export const addSpaceSuccess = (newSpace) => {
  return {
    type: ADD_SPACE,
    payload: newSpace,
  }
}
export const getSpacesSuccess = (payload) => {
  return {
    type: GET_SPACES,
    payload: payload,
  }
}

export const deleteSpaceSuccess = (spaceId) => {
  return {
    type: DELETE_SPACE,
    id: spaceId,
  }
}

export const setAddSpaceState = (space) => {
  return {
    type: SET_ADD_SPACE_STATE,
    payload: space,
  }
}

export const toggleIsEditing = () => {
  return {
    type: TOGGLE_ISEDITING,
  }
}

export const editSpaceSuccess = (spaceId, editedSpace) => {
  return {
    type: EDIT_SPACE,
    id: spaceId,
    payload: editedSpace,
  }
}
