import { createSlice } from "@reduxjs/toolkit";

const homeSlice=createSlice({
      name:"homepageSlice",
      initialState:{
            url:{},
            genres:{
            }
      },
      reducers:{
        getURL:(state,action)=>{
            return {...state,...action.payload}
        },
        getgenres:(state,action)=>{
          // returns a new state rather then mutating it.
            return {...state,...action.payload}
        },
      }
})

export default homeSlice.reducer;
export const {getURL,getgenres}=homeSlice.actions;