import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: "" })

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "dog"],
  endpoints: (builder) => ({}),
})

// export const dogSlice = createApi({
//   baseQuery,
//   tagTypes: ["Dog"],
//   endpoints: (builder) => ({}),
// })
