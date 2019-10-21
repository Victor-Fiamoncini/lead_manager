// Action types
import { CREATE_MESSAGE, GET_ERRORS } from './types'

// Create message
export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  }
}

// Return errors
export const returnErrors = (message, status) => {
  return {
    type: GET_ERRORS,
    payload: {
      message,
      status
    }
  }
}
