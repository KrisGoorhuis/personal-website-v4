import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { localizeReducer } from 'react-localize-redux'

export type State = ReturnType<typeof reducer>

const reducer = combineReducers({
  localize: localizeReducer
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})