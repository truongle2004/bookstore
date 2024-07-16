import { combineSlices } from '@reduxjs/toolkit'
import openDialogReducer from '../features/components/OpenDialog'
import ListProductsReducer from '../features/components/ListProducts'
import countSelectReducer from '../features/cart/CountProductSelected'
import cartMoneyReducer from '../features/cart/CartMoney'
import SelectAllItemsReducer from '../features/cart/SelectAllItem'
import UserServiceIndexReducer from '../features/services/UserServiceIndex'
import StoreProductIdReducer from '../features/utils/StoreProductId'
import UserAddressReducer from '../features/services/UserAddress'
import BuyItemReducer from '../features/cart/BuyItem'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  ListProducts: ListProductsReducer,
  countSelect: countSelectReducer,
  cartMoney: cartMoneyReducer,
  isSelectedAll: SelectAllItemsReducer,
  userServiceIndex: UserServiceIndexReducer,
  storeProductId: StoreProductIdReducer,
  userAddress: UserAddressReducer,
  buyItem: BuyItemReducer
})
