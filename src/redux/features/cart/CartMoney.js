import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  CartMoney: 0
}

export const CartMoneySlide = createSlice({
  name: 'cart-money',
  initialState,
  reducers: {
    AddMoney: (state, action) => {
      state.CartMoney = state.CartMoney + action.payload
    },
    SubtractMoney: (state, action) => {
      if (state.CartMoney > 0 && state.CartMoney >= action.payload) {
        state.CartMoney = state.CartMoney - action.payload
      }
    }
  }
})

export const { AddMoney, SubtractMoney } = CartMoneySlide.actions
export default CartMoneySlide.reducer
