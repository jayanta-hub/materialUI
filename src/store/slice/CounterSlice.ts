/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    counter: (state,actions) => {
      state.counter = actions.payload;
    },
  },
});
export const { counter } = counterSlice.actions;
export default counterSlice.reducer;