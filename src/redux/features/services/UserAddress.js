import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: ''
}

export const UserAddressSlide = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.address = action.payload
    }
  }
})

export const { setUserAddress } = UserAddressSlide.actions
export default UserAddressSlide.reducer
