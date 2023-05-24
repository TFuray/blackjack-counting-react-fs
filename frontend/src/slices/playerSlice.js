import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  playerHand: localStorage.getItem("playerHand")
    ? JSON.parse(localStorage.getItem("playerHand"))
    : null,
  playerTotal: localStorage.getItem('playerTotal')? JSON.parse(localStorage.getItem('playerTotal')): null,
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerHand: (state, action) => {
      state.playerHand = action.payload
      localStorage.setItem("playerHand", JSON.stringify(action.payload))
    },
    setPlayerTotal: (state, action) => {
      state.playerTotal = action.payload
      localStorage.setItem("playerTotal", JSON.stringify(action.payload))
    },
    // Clear local storage
    clearPlayerHand: (state, action) => {
      state.playerHand = null
      localStorage.removeItem("playerHand")
    },
    clearPlayerTotal: (state, action) => {
      state.playerTotal= null
      localStorage.removeItem("playerTotal")
    },
  },
})

export const { setPlayerHand, clearPlayerHand, setPlayerTotal, clearPlayerTotal} = playerSlice.actions

export default playerSlice.reducer
