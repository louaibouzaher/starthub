import { combineReducers } from 'redux'

import postsReducer from './Posts/posts.reducer'
import overlayWindowReducer from './overlayWindow/overlayWindow.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  overlayWindow: overlayWindowReducer,
})

export default rootReducer
