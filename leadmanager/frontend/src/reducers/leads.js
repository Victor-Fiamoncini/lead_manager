// Imports
import { GET_LEADS } from '../actions/types'

// State
const INITIAL_STATE = {
  leads: []
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_LEADS:
      return {
        ...state,
        leads: payload
      }

    default:
      return state
  }
}
