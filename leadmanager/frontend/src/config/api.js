// Imports
import axios from 'axios'

// Django Lead Manager API
export const api = axios.create({
  baseURL: 'http://localhost/api/leads/',
  headers: {}
})
