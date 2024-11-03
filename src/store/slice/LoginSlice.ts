/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { musafirApi } from "../musafirApi";

const initialState: any = {
  userLoginInfo: {},
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.userLoginInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(musafirApi.endpoints.login.matchRejected, (state, { payload }) => {
      state.userLoginInfo = payload;
    });
    builder.addMatcher(musafirApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.userLoginInfo = payload;
    });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;