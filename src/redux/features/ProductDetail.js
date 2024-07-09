import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: {}
}

export const ProductDetailSlide = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    setProductDetail: (state, action) => {
      state.product = action.payload
    }
  }
})

export const { setProductDetail } = ProductDetailSlide.actions
export default ProductDetailSlide.reducer
