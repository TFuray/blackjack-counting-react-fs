import { apiSlice } from "@store/slices/api/apiSlice.js"

const CARD_URL = "/api/cards"

export const cardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    shuffleCards: builder.query({
      query: () => `${CARD_URL}/shuffleCards`,
    }),
    dealHand: builder.query({
      query: () => `${CARD_URL}/dealHand`,
    }),
    drawOne: builder.query({
      query: () => `${CARD_URL}`,
    }),
    // drawOne: builder.mutation({
    //   query: () => ({
    //     url: `${CARD_URL}`,
    //     method: "POST",
    //   }),
    // }),
  }),
})

export const {
  useShuffleCardsQuery,
  useDealHandQuery,
  useDrawOneQuery,
  useDrawOneMutation,
} = cardsApiSlice
