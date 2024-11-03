/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../utility/config";

export const musafirApi = createApi({
  reducerPath: "musafirApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BaseURL}/api/v1/`,
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState()?.loginSlice?.userLoginInfo?.data?.token;
      // const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVtZXNoQG1haWxpbmF0b3IuY29tIiwidXNlcklkIjoxLCJ2YWxpZGF0aW9uU3RhdHVzIjowLCJpYXQiOjE3MjA3NjM1MzksImV4cCI6MTcyMDc4NTEzOX0.Zh1G6GyCHjYYcccj835q9_CCdKo5XA9HQtvPIdR1wjk";
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ patch }) => ({
        url: "auth/login",
        method: "POST",
        body: patch,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = musafirApi;