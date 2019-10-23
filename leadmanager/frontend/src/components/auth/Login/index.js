// React & Redux
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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
  const handleInputChange = event => setuserData({
    ...userData,
    [event.target.name]: event.target.value
  })

  // Form submit
  const handleFormSubmit = event => {
    event.preventDefault()
    setUserData({
      username: '',
      email: '',
      password: '',
      password2: ''
    })
  }

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

export default Login
