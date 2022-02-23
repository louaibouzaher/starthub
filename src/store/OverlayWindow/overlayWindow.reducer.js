import { CHANGE_CHILD, TOGGLE_OVERLAY } from './overlayWindow.types'

const INITIAL_STATE = {
  isOpen: false,
  currentChild: () => <></>,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_OVERLAY:
      return { ...state, isOpen: !state.isOpen }
    case CHANGE_CHILD:
      return { ...state, currentChild: action.payload }
    default:
      return state
  }
}

export default reducer
