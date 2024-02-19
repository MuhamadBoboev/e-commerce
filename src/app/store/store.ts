import { configureStore } from '@reduxjs/toolkit'

import { cartSlice } from '@features/cart'
import { favoriteSlice } from '@features/favorite/model'
import { filterSlice } from '@features/product-filters/model'

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    favorite: favoriteSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
