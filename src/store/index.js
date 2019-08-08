import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import todos from './todos/reducer'

const todosApp = combineReducers({
  todos,
})

const store = createStore(todosApp, applyMiddleware(thunk))

export default store
