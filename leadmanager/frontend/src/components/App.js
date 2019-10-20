// React & Redux
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'

// Components
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

// App
const App = () => (
  <Provider store={store}>
    <Header />
    <div className="container pt-2">
      <Dashboard />
    </div>
  </Provider>
)

// DOM Render
ReactDOM.render(<App />, document.getElementById('app'))
