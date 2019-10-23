// Imports
import axios from 'axios'

// Django Lead Manager API
export const api = axios.create({
  baseURL: '/api/leads/',
})

// Django Auth API
export const authApi = axios.create({
  baseURL: '/api/auth/',
})
