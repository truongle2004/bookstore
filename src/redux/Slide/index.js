import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer
})
