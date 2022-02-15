import { TOGGLE_OVERLAY } from './overlayWindow.types'

const INITIAL_STATE = {
  isOpen: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return { ...state, isOpen: !state.isOpen }

    default:
      return state
  }
}

export default reducer
