import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isBought: false
}

export const BuyItemSlide = createSlice({
  name: 'buyitem',
  initialState,
  reducers: {
    BuyItem: (state, action) => {
      state.isBought = action.payload
    }
  }
})

export const { BuyItem } = BuyItemSlide.actions
export default BuyItemSlide.reducer
