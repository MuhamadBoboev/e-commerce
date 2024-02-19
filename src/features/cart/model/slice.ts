import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@entities/products'

interface CartSliceState {
  cartProducts: Product[]
  cartProduct: Product
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}
const initialState: CartSliceState = {
  cartProducts: [],
  cartProduct: {
    id: 0,
    name: '',
    description: '',
    base_price: 0,
    image: '',
    category: {
      id: 0,
      name: '',
    },
    brand: {
      id: 0,
      name: '',
      image: '',
    },
    slug: '',
    discount: 0,
  },
  status: 'idle',
}

export const getCartProducts = createAsyncThunk(
  'cart/getCartStorage',
  async () => {
    try {
      const cartProductsStorage = localStorage.getItem('cartProducts')
      if (cartProductsStorage) {
        const parsedData = JSON.parse(cartProductsStorage)
        return parsedData
      }
      return []
    } catch (error) {
      console.error('Error parsing cartProductsStorage:', error)
      throw error
    }
  },
)
export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action: PayloadAction<Product>) {
      const indexProduct = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (indexProduct === -1) {
        state.cartProducts = [...state.cartProducts, action.payload]
      } else {
        state.cartProducts.splice(indexProduct, 1)
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
    clearCart(state) {
      localStorage.removeItem('cartProducts')
      state.status = 'fulfilled'
      state.cartProducts = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartProducts.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getCartProducts.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.cartProducts = action.payload
      })
      .addCase(getCartProducts.rejected, (state) => {
        state.status = 'rejected'
        state.cartProducts = []
      })
  },
})

export const { toggleCart, clearCart } = slice.actions
