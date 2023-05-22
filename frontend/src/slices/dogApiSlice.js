import { apiSlice } from "./apiSlice.js"

const DOG_URL = "/api/dog"

export const dogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDog: builder.mutation({
      query: (data) => ({
        url: `${DOG_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    getDogs: builder.query({
      query: ()=> DOG_URL
    }),
    getPost: builder.mutation({
      query: () => ({
        url: `${DOG_URL}/post`,
        method: "GET",
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
  useGetDogsQuery,
  useGetPostMutation,
  useAddPostMutation,
} = dogApiSlice
