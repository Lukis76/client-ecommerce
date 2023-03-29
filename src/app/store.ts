import { ecomerdeMercadoFreeApi } from "@api/indexSlice";
// import { userApi } from "@querys/user";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { useAppDispatch } from "./hook";
import { addUserStorage, authSlice } from "./features/user/slice";
////////////////////////////////////////////////

//MIDDLEWARE
// const localStorageMiddleware = ({ getState }) => {
//   return next => action => {
//     const result = next(action);
//     localStorage.setItem('applicationState', JSON.stringify(getState()));
//     return result;
//   };
// };

const authMiddleware = (stor: any) => (next: any) => async (action: any) => {
  // console.log("nija storn ~ store => ", store)
  // const dispatch = useAppDispatch();
  if (action?.meta?.arg?.endpointName === "login" && action?.payload) {
    const user = action.payload;
    await localStorage.setItem("User", JSON.stringify(user));
    // await dispatch(addUserStorage(user));
  }
  return next(action);
};

// entities
// const reHydrateStore = () => {
//   if (localStorage.getItem('applicationState') !== null) {
//     return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
//   }
// };

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    [ecomerdeMercadoFreeApi.reducerPath]: ecomerdeMercadoFreeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ecomerdeMercadoFreeApi.middleware).concat(authMiddleware),
});
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;























