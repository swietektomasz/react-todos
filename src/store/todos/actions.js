import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FETCH_TODOS } from './types'
import getRandomId from './../../utils/getRandomId'
import { getTodos } from '../../api'

const _fetchTodos = payload => ({
  type: FETCH_TODOS,
  payload,
})

export const addTodo = payload => ({
  type: ADD_TODO,
  payload: {
    title: payload,
    id: getRandomId(),
    createdAt: new Date().toLocaleString(),
    done: false,
  },
})

export const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload,
})

export const toggleTodo = payload => ({
  type: TOGGLE_TODO,
  payload,
})

export const fetchTodos = () => {
  return dispatch => {
    getTodos().then(data => {
      dispatch(_fetchTodos(data))
    })
  }
}
