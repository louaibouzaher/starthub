import { combineReducers } from 'redux'

import postsReducer from './Posts/posts.reducer'
import projectReducer from './Projects/projects.reducer'
import overlayWindowReducer from './OverlayWindow/overlayWindow.reducer'
import sectionIndexerReducer from './SectionIndexer/sectionIndexer.reducer'
import messagesReducer from './Messages/messages.reducer'
import userReducer from './User/user.reducer'
import spaceReducer from './Spaces/spaces.reducer'
import notificationsReducer from './Notifications/notifications.reducer'
import reviewsReducer from './Reviews/reviews.reducer'

const rootReducer = combineReducers({
  posts: postsReducer,
  projects: projectReducer,
  spaces: spaceReducer,
  overlayWindow: overlayWindowReducer,
  sectionIndexer: sectionIndexerReducer,
  messages: messagesReducer,
  notifications: notificationsReducer,
  reviews: reviewsReducer,
  user: userReducer,
})

export default rootReducer
