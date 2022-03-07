import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { login } from './User/user.api'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {
  console.log(store.getState())
})

export default store
