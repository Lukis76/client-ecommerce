import { createSlice } from "@reduxjs/toolkit";
// import { authService } from "./service";
////////////////////////////////////////
type TDefaultUserState = {
  id: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  mobile: number | undefined;
  token: string | undefined;
  role: undefined | "admin" | "user";
  nickname: string | undefined;
  avatar: string | undefined;
  isBlocked: boolean | undefined;
  address: string | undefined;
};
/////////////////////////////////////////////
const initialState: TDefaultUserState = {
  id: undefined,
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  mobile: undefined,
  token: undefined,
  role: undefined,
  nickname: undefined,
  avatar: undefined,
  isBlocked: undefined,
  address: undefined,
};
//-----------------------------------
export const authSlice = createSlice({
  name: "user",
  initialState: {
    user: !!localStorage.getItem("User")
      ? JSON.parse(localStorage.getItem("User") as string)
      : initialState,
  },
  reducers: {
    addUserStorage: (state, action) => {
     state.user = action.payload;
    },
    deleteUserStorage: (state, action) => {
      localStorage.clear()
      state.user = action.payload
    }
  },
});

export const { addUserStorage, deleteUserStorage } = authSlice.actions;
