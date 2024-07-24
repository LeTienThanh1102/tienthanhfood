import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    account: {
      access_token: "",
      refresh_token: "",
      username: "",
      role: "",
      email: "",
      address: "",
      id: "",
    },
    isAuthenticated: false,
  },
  reducers: {
    updateUser: (state, action) => {
      state.account = {
        access_token: action?.payload?.accesstoken,
        refresh_token: action?.payload?.refresh_token,
        username: action?.payload?.username,
        address: action?.payload?.address,
        role: action?.payload?.role,
        email: action?.payload?.email,
        id: action?.payload?._id,
      };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.account = {
        access_token: "",
        refresh_token: "",
        username: "",
        image: "",
        role: "",
        email: "",
        id: "",
      };
      state.isAuthenticated = false;
    },
  },
});
export const { updateUser, logout } = authSlice.actions;
export default authSlice.reducer;
