import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as tagTypes from "./tagTypes"

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v2/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ endpoint }) => endpoint,
      method: 'GET',
      providesTags: (result, error, arg) => arg.tag ? [arg.tag] : [],
    }),
    deleteUser: builder.mutation({
      query: ({ endpoint }) => endpoint,
      method: 'DELETE',
    }),
    invalidatesTags: (result, error, arg) => arg.tag ? [arg.tag] : [],
  }),
})

export const { useGetUsersQuery, useDeleteUserMutation } = usersApi