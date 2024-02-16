import { filterSlice } from '@features/product-filters/model/filterSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
})
