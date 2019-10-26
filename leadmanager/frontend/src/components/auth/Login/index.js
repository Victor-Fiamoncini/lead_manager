// React & Redux
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Actions
import { login } from '../../../actions/auth'

// Login
const Login = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Local state
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = userData

  // Input change
  const handleInputChange = event => setUserData({
    ...userData,
    [event.target.name]: event.target.value
  })

  // Form submit
  const handleFormSubmit = event => {
    event.preventDefault()
    dispatch(login(username, password))
    setUserData({
      username: '',
      password: ''
    })
  }

  // Auth state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (isAuthenticated) {
    <Redirect to="/" />
  } else {
    return (
      <div className="card card-body my-4">
        <h2>Login</h2>
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
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
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
}

export default Login
