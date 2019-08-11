import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  GET_TODO_BY_ID,
} from './types'

const todos = (
  state = { nodes: [], byId: { id: null, title: '', description: '', done: false } },
  { payload, type },
) => {
  switch (type) {
    case FETCH_TODOS: {
      return { ...state, nodes: payload }
    }
    case ADD_TODO: {
      return { ...state, nodes: [...state.nodes, payload] }
    }
    case REMOVE_TODO: {
      return state.filter(({ nodes }) => nodes.id !== payload.id)
    }
    case TOGGLE_TODO: {
      const nodes = state.nodes.map(todo => {
        return todo.id === payload.id ? payload : todo
      })
      return { ...state, nodes }
    }
    case UPDATE_TODO: {
      const nodes = state.nodes.map(todo => {
        return todo.id === payload.id ? payload : todo
      })
      return { ...state, nodes }
    }
    case GET_TODO_BY_ID: {
      console.log(payload)
      return { ...state, byId: payload, poop: 'stinky' }
    }
    default:
      return state
  }
}

export default todos
