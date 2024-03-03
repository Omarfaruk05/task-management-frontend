import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
    userSignUp: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.auth],
    }),
  }),
});

export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
