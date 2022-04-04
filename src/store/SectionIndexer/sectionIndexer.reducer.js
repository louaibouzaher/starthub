import { SECTIONS_INIT, SET_SECTION } from './sectionIndexer.types'

const INITIAL_STATE = {
  sections: [],
  selectedSection: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SECTION:
      return { ...state, selectedSection: action.payload }
    case SECTIONS_INIT:
      return { sections: action.payload, selectedSection: 0 }
    default:
      return state
  }
}

export default reducer
