// Imports
import { GET_LEADS, DELETE_LEAD } from '../actions/types'

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

    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== payload)
      }

    default:
      return state
  }
}
