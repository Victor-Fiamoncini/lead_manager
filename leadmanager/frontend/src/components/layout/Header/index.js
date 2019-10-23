// React
import React from 'react'
import { Link } from 'react-router-dom'

// Header
const Header = () => (
  <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">Lead Manager</Link>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample01"
        aria-controls="navbarsExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarsExample01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
