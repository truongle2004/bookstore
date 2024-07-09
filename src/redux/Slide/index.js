import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import ListProductsReducer from '../features/ListProducts'
import ProductDetailReducer from '../features/ProductDetail'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  ListProducts: ListProductsReducer,
  ProductDetail: ProductDetailReducer
})
