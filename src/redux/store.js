import {configureStore} from "@reduxjs/toolkit"
import cartReducers from "./features/cartSlice"


export const store = configureStore({
  reducer:{
    cartReducers,
  }
})