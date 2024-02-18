import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getFavoriteProducts.pending, (state) => {
  //       state.status = 'pending'
  //     })
  //     .addCase(getFavoriteProducts.fulfilled, (state, action) => {
  //       state.status = 'fulfilled'
  //       state.favoritesProducts = action.payload
  //     })
  //     .addCase(getFavoriteProducts.rejected, (state) => {
  //       state.status = 'rejected'
  //       state.favoritesProducts = []
  //     })
  // },
})

// export const getFavoriteProducts = createAsyncThunk(
//   'getFavoriteStorage',
//   async () => {
//     try {
//       const favoriteProductsStorage = localStorage.getItem('favoriteProducts')
//       if (favoriteProductsStorage) {
//         const parsedData = JSON.parse(favoriteProductsStorage)
//         return parsedData
//       }
//       return []
//     } catch (error) {
//       console.error('Error parsing cartProductsStorage:', error)
//       throw error
//     }
//   },
// )

export const { toggleCart, clearCart } = slice.actions
