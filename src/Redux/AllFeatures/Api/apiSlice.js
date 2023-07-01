import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiSlice= createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://eco-cart-admin.netlify.app",
    }),
    endpoints: (builder)=>({})
})
export default apiSlice;