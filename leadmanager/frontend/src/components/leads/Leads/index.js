// React & Redux
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getLeads } from '../../../actions/leads'

// Leads
const Leads = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getLeads())
  }, [dispatch])

  return (
    <div>
      leads list
    </div>
  )
}

export default Leads
