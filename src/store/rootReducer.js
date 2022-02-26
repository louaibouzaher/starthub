import { combineReducers } from 'redux'

import postsReducer from './Posts/posts.reducer'
import projectReducer from './Projects/projects.reducer'
import overlayWindowReducer from './OverlayWindow/overlayWindow.reducer'
import sectionIndexerReducer from './SectionIndexer/sectionIndexer.reducer'
import messagesReducer from './Messages/messages.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  projects: projectReducer,
  overlayWindow: overlayWindowReducer,
  sectionIndexer: sectionIndexerReducer,
  messages: messagesReducer,
})

export default rootReducer
