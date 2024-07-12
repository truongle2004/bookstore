import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectAllItems: false
}

export const SelectAllItemsSlide = createSlice({
  name: 'select-item',
  initialState,
  reducers: {
    isSelectedAllItem: (state, action) => {
      state.selectAllItems = action.payload
    }
  }
})

export const { isSelectedAllItem } = SelectAllItemsSlide.actions
export default SelectAllItemsSlide.reducer
