import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from './cardSlices'

export const store = configureStore({
  reducer: {
    cardDetails:cardSlice
  },
})
