import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./slices/api/apiSlice.js"
import authReducer from "./slices/auth/authSlice.js"
import dealerReducer from "./slices/dealer/dealerSlice.js"
import playerReducer from "./slices/player/playerSlice.js"

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
