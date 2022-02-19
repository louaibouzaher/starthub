import { CHANGE_CHILD, TOGGLE_OVERLAY } from './overlayWindow.types'

export const toggleOverlay = () => {
  return {
    type: TOGGLE_OVERLAY,
  }
}
export const changeChild = (newChild) => {
  return {
    type: CHANGE_CHILD,
    payload: newChild,
  }
}
