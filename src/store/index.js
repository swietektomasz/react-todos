import { combineReducers, createStore } from 'redux'

import todos from './todos/reducer'

const todosApp = combineReducers({
  todos,
})

const store = createStore(todosApp)

export default store
