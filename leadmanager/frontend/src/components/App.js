// React & Redux
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

// Components
import Header from './layout/Header'
import Alert from './layout/Alert'
import Dashboard from './leads/Dashboard'

// Others
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { alertOptions } from '../config/alert'

// App
const App = () => (
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Header />
      <Alert />
      <div className="container pt-2">
        <Dashboard />
      </div>
    </AlertProvider>
  </Provider>
)

// DOM Render
ReactDOM.render(<App />, document.getElementById('app'))
