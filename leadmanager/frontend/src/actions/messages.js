// Action types
import { CREATE_MESSAGE } from './types'

// Create message
export const createMessage = message => {
  return {
    type: CREATE_MESSAGE,
    payload: message
  }
}
