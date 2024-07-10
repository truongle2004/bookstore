import openDialogReducer from '../features/OpenDialog'
import { combineSlices } from '@reduxjs/toolkit'
import ListProductsReducer from '../features/ListProducts'
import ProductDetailReducer from '../features/ProductDetail'
import totalSelectReducer from '../features/CartFeatures/totalProductSelected'

export const rootReducer = combineSlices({
  openDialog: openDialogReducer,
  ListProducts: ListProductsReducer,
  ProductDetail: ProductDetailReducer,
  totalSelected: totalSelectReducer
})
