// React & Redux
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Others
import { useAlert } from 'react-alert'

// Alert
const Alert = () => {
  // Alert main hook
  const alert = useAlert()

  // Global states
  const errors = useSelector(state => state.errors)
  const messages = useSelector(state => state.messages)

  // Errors update
  useEffect(() => {
    if (errors.message.name) {
      alert.error(`Name: ${errors.message.name.join()}`)
    }
    if (errors.message.email) {
      alert.error(`E-mail: ${errors.message.email.join()}`)
    }
    if (errors.message.message) {
      alert.error(`Message: ${errors.message.message.join()}`)
    }
    if (errors.message.non_field_errors) {
      alert.error(`Message: ${errors.message.non_field_errors.join()}`)
    }
  }, [errors])

  // Messages update
  useEffect(() => {
    if (messages.deleteLead) {
      alert.success(messages.deleteLead)
    }
    if (messages.addLead) {
      alert.success(messages.addLead)
    }
  }, [messages])

  return <></>
}

export default Alert
