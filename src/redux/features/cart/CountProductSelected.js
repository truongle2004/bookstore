import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsSelected: 0
}

export const ProductSelectedSlide = createSlice({
  name: 'product-select-checkbox',
  initialState,
  reducers: {
    increaseSelectCheckBox: (state) => {
      state.productsSelected = state.productsSelected + 1
    },
    reduceSelectedCheckBox: (state) => {
      state.productsSelected =
        state.productsSelected > 0 ? state.productsSelected - 1 : 0
    }
  }
})

export const { increaseSelectCheckBox, reduceSelectedCheckBox } =
  ProductSelectedSlide.actions
export default ProductSelectedSlide.reducer
