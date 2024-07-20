import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isBought: false,
  user_info: {
    address: '',
    fullName: '',
    phoneNumber: ''
  }
}

export const UserInfoSlide = createSlice({
  name: 'user-info',
  initialState,
  reducers: {
    AddUserInfo: (state, action) => {
      state.user_info.address = action.payload.address
      state.user_info.fullName = action.payload.fullName
      state.user_info.phoneNumber = action.payload.phoneNumber
    }
  }
})

export const { AddUserInfo } = UserInfoSlide.actions
export default UserInfoSlide.reducer
