import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import { ecomerdeMercadoFreeApi } from "./indexSlice";

const productAdapter = createEntityAdapter({ selectId: (e: any) => e._id });
// const productAdapter = createEntityAdapter({});

const initialState = productAdapter.getInitialState({});

export const productApiSlice = ecomerdeMercadoFreeApi.injectEndpoints({
  endpoints: (builder) => ({
    AllProducts: builder.query({
      query: ({search}) => '/product' + search + '&limit=20'
    }),
    searchProducts: builder.query({
      query: (data) => `/product?limit=10&title=${data}`,
    }),
  }),
});

export const { useAllProductsQuery, useLazyAllProductsQuery, useLazySearchProductsQuery } = productApiSlice;

// returns the query result object
// @ts-ignore
export const selectedProductResult = productApiSlice.endpoints.AllProducts.select();

// Creates memoized selector
const selectProductData = createSelector(
  selectedProductResult,
  (productResult) => productResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProduct,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectTotal: selectProductTotal,
  // Pass in a selector that returns the posts slice of state
} = productAdapter.getSelectors(selectProductData);
