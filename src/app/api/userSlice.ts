import { ecomerdeMercadoFreeApi } from "./indexSlice";
///////////////////////////////////////////////////////////////////////
export const useApiSlice = ecomerdeMercadoFreeApi.injectEndpoints({
  endpoints: (builder) => ({
    //--------------------------
    login: builder.mutation({
      query: (userLogin) => ({
        url: "/user/login",
        method: "POST",
        body: userLogin,
      }),
    }),
    //----------------------------
    register: builder.mutation({
      query: (userRegister) => ({
        url: "/user/register",
        method: "POST",
        body: userRegister,
      }),
    }),
    //----------------------------
    customers: builder.query({
      query: (_data) => `/user/allusers`,
    }),
    //----------------------------
  }),
});

export const { useLoginMutation, useRegisterMutation, useCustomersQuery, useLazyCustomersQuery } = useApiSlice;
