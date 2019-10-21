// React & Redux
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// Actions
import { addLead } from '../../../actions/leads'

// Form
const Form = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Local state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Props
  const { name, email, message } = formData

  // Input change
  const handleInputChange = event => setFormData({
    ...formData,
    [event.target.name]: event.target.value
  })

  // Form submit
  const handleFormSubmit = event => {
    event.preventDefault()
    dispatch(addLead({ name, email, message }))
  }

  return (
    <div className="card card-body my-4">
      <h2>Add Lead</h2>
      <form onSubmit={event => handleFormSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={name}
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
          <textarea
            className="form-control"
            name="message"
            placeholder="Message"
            value={message}
            onChange={event => handleInputChange(event)}
          ></textarea>
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

export default Form
