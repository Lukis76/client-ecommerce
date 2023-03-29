import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
const API = import.meta.env.VITE_BASE_URL_BACK || 'http://localhost:4000/api'
///////////////////////////////////////////////////////////////////////
export const ecomerdeMercadoFreeApi = createApi({
  reducerPath: 'ecomerdeMercadoFreeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API }),
  refetchOnMountOrArgChange: 10,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['allProducts', 'login'],
  endpoints: (_builder) => ({}),
})
