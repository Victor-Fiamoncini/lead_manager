// React & Redux
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Header
const Header = () => {
  // Auth state
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const user = useSelector(state => state.auth.user)

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Lead Manager</Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#header"
          aria-controls="header"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="header">
          {isAuthenticated ? (
            <ul className="navbar-nav mr-auto">
              <h2>Welcome {user.name}</h2>
              <li className="nav-item">
                <Link to="/" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">Logout</Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
