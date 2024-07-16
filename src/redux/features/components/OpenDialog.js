import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  openRequireInfo: false
}

export const dialogSlide = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    isOpenedDialog: (state, action) => {
      state.open = action.payload
    },
    isOpenedDialogRequireInfo: (state, action) => {
      state.openRequireInfo = action.payload
    }
  }
})

export const { isOpenedDialog, isOpenedDialogRequireInfo } = dialogSlide.actions
export default dialogSlide.reducer
