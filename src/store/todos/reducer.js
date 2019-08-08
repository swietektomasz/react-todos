import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FETCH_TODOS } from './types'

const todos = (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_TODOS: {
      return [...state, payload]
    }
    case ADD_TODO: {
      return [...state, payload]
    }
    case REMOVE_TODO: {
      return state.filter(state => state.id !== payload)
    }
    case TOGGLE_TODO: {
      return state.map(todo => (todo.id === payload ? { ...todo, done: !todo.done } : todo))
    }
    default:
      return state
  }
}

export default todos
