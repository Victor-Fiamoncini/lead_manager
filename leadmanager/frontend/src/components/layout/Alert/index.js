// React & Redux
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Others
import { useAlert } from 'react-alert'

// Alert
const Alert = () => {
  // Alert main hook
  const alert = useAlert()

  // Errors state
  const errors = useSelector(state => state.errors)

  // Errors did update
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
  }, [errors])

  return <></>
}

export default Alert
