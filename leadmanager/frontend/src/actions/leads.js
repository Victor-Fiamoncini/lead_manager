// Action types
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'

// Actions
import { createMessage, returnErrors } from '../actions/messages'
import { tokenConfig } from './auth'

// Others
import { api } from '../config/api'

// Get Leads
export const getLeads = () => async (dispatch, getState) => {
  try {
    const res = await api.get('/', tokenConfig(getState))
    dispatch({
      type: GET_LEADS,
      payload: res.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}

// Delete lead
export const deleteLead = id => async (dispatch, getState) => {
  try {
    await api.delete(`/${id}`, tokenConfig(getState))
    dispatch({
      type: DELETE_LEAD,
      payload: id
    })
    dispatch(createMessage({ deleteLead: 'Lead deleted' }))
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}

// Add lead
export const addLead = lead => async (dispatch, getState) => {
  try {
    const res = await api.post('/', lead, tokenConfig(getState))
    dispatch({
      type: ADD_LEAD,
      payload: res.data
    })
    dispatch(createMessage({ addLead: 'Lead added' }))
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}
