import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './Slide'

export const store = configureStore({
  reducer: rootReducer
})
