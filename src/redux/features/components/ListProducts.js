import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  productsCart: [],
  productsBuyNow: []
}

export const ListProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.productsCart.find((value) => value.id === action.payload.id)) {
        state.productsCart.push(action.payload)
        toast.success('Add successfully')
      } else {
        toast.error('Product exists in cart')
      }
    },
    removeAnItemFromCart: (state, action) => {
      state.productsCart = state.productsCart.filter(
        (product) => product.id !== action.payload
      )
    },
    removeAllItems: (state) => {
      state.productsCart = []
    },
    addToListBuyNow: (state, action) => {
      if (
        !state.productsBuyNow.find((value) => value.id === action.payload.id)
      ) {
        state.productsBuyNow.push(action.payload)
        toast.success('Buy successfully')
      }
    }
  }
})

export const {
  addToCart,
  removeAnItemFromCart,
  removeAllItems,
  addToListBuyNow
} = ListProductsSlice.actions
export default ListProductsSlice.reducer
