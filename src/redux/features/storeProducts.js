import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const userProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.product.find(action.payload)) {
        state.products.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      )
    }
  }
})

export const { addToCart, removeFromCart } = userProductsSlice.actions
export default userProductsSlice.reducer
