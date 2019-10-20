// Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Header from './layout/Header'
import Dashboard from './leads/Dashboard'

// App
const App = () => (
  <>
    <Header />
    <div className="container">
      <Dashboard />
    </div>
  </>
)

// DOM Render
ReactDOM.render(<App />, document.getElementById('app'))
