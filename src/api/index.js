import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001',
})

const extractData = ({ data }) => data

export const getTodos = () => api.get('/todos').then(extractData)
