// React
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// PrivateRoute
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Auth state
  const auth = useSelector(state => state.auth)

  if (auth.isLoading) {
    // Spinner here
    return <h2>Loading...</h2>
  } else if (!auth.isAuthenticated) {
    return <Redirect to="/login" />
  } else {
    return <Route {...rest} render={props => {
      return <Component {...props} />
    }} />
  }
}

// Props
PrivateRoute.propTypes = {
  Component: PropTypes.element.isRequired
}

export default PrivateRoute
