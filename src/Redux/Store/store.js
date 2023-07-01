import apiSlice from "../AllFeatures/Api/apiSlice";
import authSlice from "../AllFeatures/Auth/authSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


const store= configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth: authSlice,
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;