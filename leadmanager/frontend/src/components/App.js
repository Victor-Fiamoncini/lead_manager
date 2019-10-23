// React & Redux
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

// Components
import Header from './layout/Header'
import Alert from './layout/Alert'
import Dashboard from './leads/Dashboard'
import Login from './auth/Login'
import Register from './auth/Register'
import PrivateRoute from './auth/PrivateRoute'

// Others
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { alertOptions } from '../config/alert'

// App
const App = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <Header />
        <Alert />
        <div className="container py-2">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </AlertProvider>
  </Provider>
)

// DOM Render
ReactDOM.render(<App />, document.getElementById('app'))
