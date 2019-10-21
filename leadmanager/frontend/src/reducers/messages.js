// Imports
import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types'

// State
const INITIAL_STATE = {}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_MESSAGES:
      return payload

    case CREATE_MESSAGE:
      return state = payload

    default:
      return state
  }
}
