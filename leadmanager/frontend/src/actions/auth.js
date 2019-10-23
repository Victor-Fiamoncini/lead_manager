// Action types
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from './types'

// Actions
import { returnErrors } from '../actions/messages'

// Others
import { authApi } from '../config/api'

// Login
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING })
  // Get token from state
  const token = getState().auth.token
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Token ${token}` : ''
    }
  }
  try {
    const res = await authApi.get('/user', config)
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({ type: AUTH_ERROR })
  }
}
