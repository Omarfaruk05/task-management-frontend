/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const USER_URL = "/users";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: USER_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.auth],
    }),
    getSingleUser: build.query({
      query: (id: any) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getMyProfile: build.query({
      query: () => ({
        url: `${USER_URL}/my-profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${USER_URL}/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useGetUsersQuery,
  useGetMyProfileQuery,
  useDeleteUserMutation,
  useUpdateMyProfileMutation,
} = userApi;
