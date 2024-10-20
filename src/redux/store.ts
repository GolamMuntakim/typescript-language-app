import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Slice'
export const store =  configureStore({
    reducer :{
      root:   rootReducer,
    }
})