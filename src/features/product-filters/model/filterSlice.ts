import { createSlice } from '@reduxjs/toolkit'

interface FilterSliceState {
  price: number
  brand: number | null
  category: number | null
}
const initialState: FilterSliceState = {
  price: 5000,
  brand: null,
  category: null,
}
export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload
    },
    setBrand(state, action) {
      state.brand = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { setPrice, setBrand, setCategory } = slice.actions
