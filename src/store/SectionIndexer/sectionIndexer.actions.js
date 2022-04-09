import { SECTIONS_INIT, SET_SECTION } from './sectionIndexer.types'

export const setSection = (id) => {
  return {
    type: SET_SECTION,
    payload: id,
  }
}
export const sectionsInit = (sections) => {
  return {
    type: SECTIONS_INIT,
    payload: sections,
  }
}
