// Imports
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import leads from './reducers/leads'
import errors from './reducers/errors'
import messages from './reducers/messages'

// State
const initialState = {}

// Middlewares
const middlewares = [thunk]

// Store
const store = createStore(
	combineReducers({
    leads,
    errors,
    messages,
	}),
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
