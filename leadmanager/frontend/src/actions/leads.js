// Action types
import { GET_LEADS } from './types'

// Others
import { api } from '../config/api'

// Get Leads
export const getLeads = () => async dispatch => {
  try {
    const res = await api.get('/')
    dispatch({
      type: GET_LEADS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
