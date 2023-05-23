import { apiSlice } from "./apiSlice.js"

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
  }),
})

export const { useShuffleCardsQuery, useDealHandQuery, useDrawOneQuery } =
  cardsApiSlice
