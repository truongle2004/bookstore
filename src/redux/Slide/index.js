import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import ListProductsReducer from '../features/ListProducts'
import countSelecteReducer from '../features/CountProductSelected'
import cartMoneyReducer from '../features/CartMoney'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  ListProducts: ListProductsReducer,
  countSelect: countSelecteReducer,
  cartMoney: cartMoneyReducer
})
