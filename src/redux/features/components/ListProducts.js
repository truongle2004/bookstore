import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { fetchAllProduct, fetchAllProductInCart } from '~/axios/services'

export const fetchAllProducts = createAsyncThunk(
  'listporduct',
  async (_, { rejectWithValue }) => {
    const res = await fetchAllProduct()
    if (res.status < 200 || res.status > 300) {
      return rejectWithValue(res.data)
    }
    return res.data
  }
)

export const fetchProductInCart = createAsyncThunk(
  'listCart',
  async (_, { rejectWithValue }) => {
    const res = await fetchAllProductInCart()
    if (res.status < 200 || res.status > 300) {
      return rejectWithValue(res.data)
    }
    return res.data
  }
)
const initialState = {
  listAllProduct: [],
  productsCart: [],
  productsBuyNow: []
}

const ListProductsSlice = createSlice({
  name: 'user_products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.productsCart.some(
        (product) => product.id === action.payload.id
      )
      if (!productExists) {
        state.productsCart.push(action.payload)
        toast.success('Added to cart successfully')
      } else {
        toast.error('Product already exists in cart')
      }
    },
    removeAnItemFromCart: (state, action) => {
      state.productsCart = state.productsCart.filter(
        (product) => product.id !== action.payload
      )
    },
    removeAllItems: (state) => {
      state.productsCart = []
    },
    addToListBuyNow: (state, action) => {
      const productExists = state.productsBuyNow.some(
        (product) => product.id === action.payload.id
      )
      if (!productExists) {
        state.productsBuyNow.push(action.payload)
        toast.success('Added to buy now list successfully')
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.listAllProduct = action.payload
    })
    builder.addCase(fetchProductInCart.fulfilled, (state, action) => {
      state.productsCart = action.payload
    })
  }
})

export const {
  addToCart,
  removeAnItemFromCart,
  removeAllItems,
  addToListBuyNow
} = ListProductsSlice.actions
export default ListProductsSlice.reducer
