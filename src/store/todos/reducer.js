import { isUndefined } from 'lodash'
import {
  FETCH_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  GET_TODO_BY_ID,
} from './types'

const todos = (state = { nodes: [], byId: {} }, { payload, type }) => {
  switch (type) {
    case FETCH_TODOS: {
      return { ...state, nodes: payload }
    }
    case ADD_TODO: {
      return { ...state, nodes: [...state.nodes, payload] }
    }
    case REMOVE_TODO: {
      const newNodes = state.nodes.filter(todo => {
        return todo.id !== payload.id
      })
      return { ...state, nodes: newNodes }
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
      return { ...state, byId: payload }
    }
    default:
      return state
  }
}

export default todos
