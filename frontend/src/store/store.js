import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "@store/slices/api/apiSlice.js"
import authReducer from "@store/slices/auth/authSlice.js"
import dealerReducer from "@store/slices/dealer/dealerSlice.js"
import playerReducer from "@store/slices/player/playerSlice.js"

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
