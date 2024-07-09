import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import userProductsReducer from '../features/Products'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  userProductsReducer: userProductsReducer
})
