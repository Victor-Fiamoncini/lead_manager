// Action types
import { AUTH_ERROR, USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types'

// Actions
import { returnErrors } from '../actions/messages'

// Others
import { authApi } from '../config/api'

// Load user
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING })
  try {
    const res = await authApi.get('/user', tokenConfig(getState))
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({ type: AUTH_ERROR })
  }
}

// Login
export const login = (username, password) => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  // Body
  const body = JSON.stringify({ username, password })
  try {
    const res = await authApi.post('/login', body, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({ type: LOGIN_FAIL })
  }
}

// Logout
export const logout = () => async (dispatch, getState) => {
  try {
    await authApi.post('/logout/', null, tokenConfig(getState))
    dispatch({ type: LOGOUT_SUCCESS })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}

// Request configs
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Token ${token}` : ''
    }
  }
  return config
}

// Register
export const register = user => async dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  // Body
  const body = JSON.stringify(user)
  try {
    const res = await authApi.post('/register', body, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({ type: REGISTER_FAIL })
  }
}
