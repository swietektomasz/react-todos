import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types'
import getRandomId from './../../utils/getRandomId'

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
