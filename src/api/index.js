import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

const extractData = ({ data }) => data

export const getTodos = () => api.get('/todos').then(extractData)

export const newTodo = todo => api.post('/todos', { ...todo }).then(extractData)

export const toggleTodo = todo => api.put(`/todos/${todo.id}`, todo).then(extractData)

export const removeTodo = todo => api.delete(`/todos/${todo.id}`).then(extractData)

export const updateTodo = todo => api.put(`/todos/${todo.id}`, todo).then(extractData)

export const fetchTodoById = todoId => api.get(`/todos/${todoId}`).then(extractData)
