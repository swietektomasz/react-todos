import {
  ADD_TODO,
  FETCH_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  GET_TODO_BY_ID,
} from './types'
import * as api from '../../api'

const fetchTodos = payload => ({
  type: FETCH_TODOS,
  payload,
})

const addTodo = payload => ({
  type: ADD_TODO,
  payload,
})

const removeTodo = payload => ({
  type: REMOVE_TODO,
  payload,
})

const toggleTodo = payload => ({
  type: TOGGLE_TODO,
  payload,
})

const updateTodo = payload => ({
  type: UPDATE_TODO,
  payload,
})

const getTodoById = payload => ({
  type: GET_TODO_BY_ID,
  payload,
})

export const getTodoByIdWithDispatch = id => {
  return dispatch => {
    api.fetchTodoById(id).then(data => {
      dispatch(getTodoById(data))
    })
  }
}

export const addTodoWithDispatch = todo => {
  return dispatch => {
    api.newTodo(todo).then(data => {
      dispatch(addTodo(data))
    })
  }
}

export const fetchTodosWithDispatch = () => {
  return dispatch => {
    api.getTodos().then(data => {
      dispatch(fetchTodos(data))
    })
  }
}

export const toggleTodoWithDispatch = todo => {
  return dispatch => {
    api.toggleTodo(todo).then(data => {
      dispatch(toggleTodo(data))
    })
  }
}

export const removeTodoWithDispatch = todo => {
  return dispatch => {
    api.removeTodo(todo).then(() => {
      dispatch(removeTodo(todo))
    })
  }
}

export const updateTodoWithDispatch = todo => {
  return dispatch => {
    api.updateTodo(todo).then(data => {
      dispatch(updateTodo(data))
    })
  }
}
