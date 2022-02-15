import { combineReducers } from 'redux'

import postsReducer from './Posts/posts.reducer'
import projectReducer from './Projects/projects.reducer'
import overlayWindowReducer from './OverlayWindow/overlayWindow.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  projects: projectReducer,
  overlayWindow: overlayWindowReducer,
})

export default rootReducer
