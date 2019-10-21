// Imports
import { GET_ERRORS } from '../actions/types'

// State
const INITIAL_STATE = {
  message: {},
  status: null
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ERRORS:
      return {
        ...state,
        message: payload.message,
        status: payload.status
      }

    default:
      return state
  }
}
