import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import userProductsReducer from '../features/storeProducts'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  userProductsReducer: userProductsReducer
})
