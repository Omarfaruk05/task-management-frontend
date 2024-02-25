/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const TASK_URL = "/tasks";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (data) => ({
        url: `${TASK_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.task],
    }),
    getTasks: build.query({
      query: () => ({
        url: TASK_URL,
        method: "GET",
      }),
      providesTags: [tagTypes.task],
    }),
    getSingtask: build.query({
      query: (id: any) => ({
        url: `${TASK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.task],
    }),
    updateTask: build.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `${TASK_URL}/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: [tagTypes.task],
    }),

    deleteTask: build.mutation({
      query: (id) => ({
        url: `${TASK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.task],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useGetSingtaskQuery,
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
