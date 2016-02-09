import { combineReducers } from 'redux'
import actors from './actors'
import syncState from './syncState'

export default combineReducers({
  actors, syncState
})

