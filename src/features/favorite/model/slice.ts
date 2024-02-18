import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Product } from '@entities/products'

interface FavoriteSliceState {
  favoritesProducts: Product[]
  favoriteProduct: Product
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
}
const initialState: FavoriteSliceState = {
  favoritesProducts: [],
  favoriteProduct: {
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
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Product>) {
      const indexProduct = state.favoritesProducts.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (indexProduct === -1) {
        state.favoritesProducts = [...state.favoritesProducts, action.payload]
      } else {
        state.favoritesProducts.splice(indexProduct, 1)
      }
      localStorage.setItem(
        'favoriteProducts',
        JSON.stringify(state.favoritesProducts),
      )
    },
    clearFavorite(state) {
      localStorage.removeItem('favoriteProducts')
      state.status = 'fulfilled'
      state.favoritesProducts = []
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

export const { toggleFavorite, clearFavorite } = slice.actions
