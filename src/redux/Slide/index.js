import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import ListProductsReducer from '../features/ListProducts'
import countSelectReducer from '../features/CountProductSelected'
import cartMoneyReducer from '../features/CartMoney'
import SelectAllItemsReducer from '../features/SelectAllItem'
import UserServiceIndexReducer from '../features/UserServiceIndex'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  ListProducts: ListProductsReducer,
  countSelect: countSelectReducer,
  cartMoney: cartMoneyReducer,
  isSelectedAll: SelectAllItemsReducer,
  userServiceIndex: UserServiceIndexReducer
})
