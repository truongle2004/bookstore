import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  productsCart: [],
  productsBuyNow: []
}

const ListProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.productsCart.some(
        (product) => product.id === action.payload.id
      )
      if (!productExists) {
        state.productsCart.push(action.payload)
        toast.success('Added to cart successfully')
      } else {
        toast.error('Product already exists in cart')
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
      const productExists = state.productsBuyNow.some(
        (product) => product.id === action.payload.id
      )
      if (!productExists) {
        state.productsBuyNow.push(action.payload)
        toast.success('Added to buy now list successfully')
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
