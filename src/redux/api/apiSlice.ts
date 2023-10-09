import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery:fetchBaseQuery({baseUrl:'https://book-e-shop-server.vercel.app'}),
  tagTypes: ['comments refetch'],
  endpoints: ()=>({}),

})

export default api;

// https://book-e-shop-server.vercel.app 
// http://localhost:5000
// https://superb-dango-3fa65b.netlify.app
// superb-dango-3fa65b