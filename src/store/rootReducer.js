import { combineReducers } from 'redux'

import postsReducer from './Posts/posts.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
