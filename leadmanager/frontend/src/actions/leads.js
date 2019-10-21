// Action types
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types'

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

// Delete lead
export const deleteLead = id => async dispatch => {
  try {
    await api.delete(`/${id}`)
    dispatch({
      type: DELETE_LEAD,
      payload: id
    })
  } catch (err) {
    console.log(err)
  }
}

// Add lead
export const addLead = lead => async dispatch => {
  try {
    const res = await api.post('/', lead)
    dispatch({
      type: ADD_LEAD,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}
