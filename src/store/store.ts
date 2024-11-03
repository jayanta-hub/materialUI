import { configureStore } from "@reduxjs/toolkit";
import { musafirApi } from "./musafirApi";
import { loginSlice } from "./slice/LoginSlice";
import { counterSlice } from "./slice/CounterSlice";

export const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musafirApi.middleware),
  reducer: {
    [musafirApi.reducerPath]: musafirApi.reducer,
    loginSlice: loginSlice.reducer,
    counterSlice: counterSlice.reducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;