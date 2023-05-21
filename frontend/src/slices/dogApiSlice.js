import { dogSlice } from "./apiSlice.js"
const DOG_URL = "/api/dog"

export const dogApiSlice = dogSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDog: builder.mutation({
      query: (data) => ({
        url: `${DOG_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getDogs: builder.mutation({
      query: (data) => ({
        url: `${DOG_URL}`,
        method: "GET",
        body: data,
      }),
    }),
    getPost: builder.mutation({
      query: (data) => ({
        url: `${DOG_URL}/post`,
        method: "GET",
        body: data,
      }),
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `${DOG_URL}/post`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const {
  useAddDogMutation,
  useGetDogMutation,
  useGetPostMutation,
  useAddPostMutation,
} = dogApiSlice
