import { TOGGLE_SECTION } from './sectionIndexer.types'

import PostsIcon from '../../assets/icons/PostsIcon'
import ProjectsIcon from '../../assets/icons/ProjectsIcon'

export const sections = [
  {
    id: 0,
    title: 'Posts',
    Icon: () => <PostsIcon />,
  },
  {
    id: 1,
    title: 'Projects',
    Icon: () => <ProjectsIcon />,
  },
]

const INITIAL_STATE = sections[0]

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SECTION:
      return state.id === 0 ? sections[1] : sections[0]

    default:
      return state
  }
}

export default reducer
