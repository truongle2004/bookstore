import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productId: 0
}

export const StoreProductIdSlide = createSlice({
  name: 'store-product',
  initialState,
  reducers: {
    setProductId: (state, action) => {
      state.productId = action.payload
    }
  }
})

export const { setProductId } = StoreProductIdSlide.actions
export default StoreProductIdSlide.reducer
