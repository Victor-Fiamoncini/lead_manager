// Imports
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, LOGOUT_SUCCESS } from '../actions/types'

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

    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, payload]
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        leads: []
      }

    default:
      return state
  }
}
