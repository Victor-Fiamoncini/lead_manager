// Imports
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from '../actions/types'

// State
const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: null
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload
      }

    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null
      }

    default:
      return state
  }
}
