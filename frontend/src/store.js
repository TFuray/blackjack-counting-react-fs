import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./slices/apiSlice.js"
import authReducer from "./slices/authSlice.js"
import dealerReducer from "./slices/dealerSlice.js"
import playerReducer from "./slices/playerSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer,
    player: playerReducer,
    dealer: dealerReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
