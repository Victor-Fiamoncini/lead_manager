// React & Redux
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

// Actions
import { register } from '../../../actions/auth'
import { createMessage } from '../../../actions/messages'

// Register
const Register = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Auth state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  // Local state
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  // Props
  const { username, email, password, password2 } = userData

  // Input change
  const handleInputChange = event => setUserData({
    ...userData,
    [event.target.name]: event.target.value
  })

  // Form submit
  const handleFormSubmit = event => {
    event.preventDefault()
    if (password !== password2) {
      dispatch(createMessage({ passwordsDoNotMatch: 'Passwords do not match'}))
    } else {
      dispatch(register({ username, email, password }))
    }
  }

  // Redirect
  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <div className="card card-body my-4">
      <h2>Register</h2>
      <form onSubmit={event => handleFormSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Name"
            value={username}
            onChange={event => handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={event => handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={event => handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password2"
            placeholder="Repeat password"
            value={password2}
            onChange={event => handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
