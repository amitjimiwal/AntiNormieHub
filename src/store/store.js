import { configureStore } from "@reduxjs/toolkit";
// creating and exporting the store.
import homereducers from './slices/homePage'
export const store=configureStore({
      reducer:{
        homepageSlice:homereducers,
      }
})
