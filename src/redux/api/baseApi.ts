import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { getFromLocalStorage } from "../../utils/localStorage";

const accessToken = getFromLocalStorage("accessToken");

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-backend-two.vercel.app/api/v1",
    prepareHeaders: (headers) => {
      // Add the access token to the headers
      headers.set("Authorization", `${accessToken}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
