import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isBought: false,
  address: '',
  fullName: '',
  phoneNumber: ''
}

export const BuyItemSlide = createSlice({
  name: 'buyitem',
  initialState,
  reducers: {
    BuyItem: (state, action) => {
      state.isBought = action.payload
    },
    AddUserInfo: (state, action) => {
      state.address = action.payload.address
      state.fullName = action.payload.fullName
      state.phoneNumber = action.payload.phoneNumber
    }
  }
})

export const { BuyItem, AddUserInfo } = BuyItemSlide.actions
export default BuyItemSlide.reducer
