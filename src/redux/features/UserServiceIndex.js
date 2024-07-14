import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0
}

export const UserServicesSlide = createSlice({
  name: 'index-services',
  initialState,
  reducers: {
    setOpenLogin: (state) => {
      state.index = 0
    },
    setOpenRegister: (state) => {
      state.index = 1
    }
  }
})

export const { setOpenLogin, setOpenRegister } = UserServicesSlide.actions
export default UserServicesSlide.reducer
