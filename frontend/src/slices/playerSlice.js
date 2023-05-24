import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  playerHand: localStorage.getItem("playerHand")
    ? JSON.parse(localStorage.getItem("playerHand"))
    : null,
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerHand: (state, action) => {
      state.playerHand = action.payload
      localStorage.setItem("playerHand", JSON.stringify(action.payload))
    },
    // Clear local storage
    clearPlayerHand: (state, action) => {
      state.playerHand = null
      localStorage.removeItem("playerHand")
    },
  },
})

export const { setPlayerHand, clearPlayerHand } = playerSlice.actions

export default playerSlice.reducer
