import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import boardSlice from './slices/boardSlice'
import { localizeReducer } from 'react-localize-redux'

export type State = ReturnType<typeof reducer>

const reducer = combineReducers({
  boardData: boardSlice.reducer,
  locale: localizeReducer
})

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
