import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false
}

export const dialogSlide = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    isOpenedDialog: (state, action) => {
      state.open = action.payload
    }
  }
})

export const { isOpenedDialog } = dialogSlide.actions
export default dialogSlide.reducer
