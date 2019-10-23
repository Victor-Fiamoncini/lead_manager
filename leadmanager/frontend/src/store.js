// Imports
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import leads from './reducers/leads'
import errors from './reducers/errors'
import messages from './reducers/messages'
import auth from './reducers/auth'

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
    auth,
	}),
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
