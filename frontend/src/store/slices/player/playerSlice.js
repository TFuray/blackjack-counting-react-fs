import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  playerHand: localStorage.getItem("playerHand")
    ? JSON.parse(localStorage.getItem("playerHand"))
    : null,
  playerTotal: localStorage.getItem("playerTotal")
    ? JSON.parse(localStorage.getItem("playerTotal"))
    : null,
  playerTurn: localStorage.getItem("playerTurn")
    ? JSON.parse(localStorage.getItem("playerTurn"))
    : true,
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerHand: (state, action) => {
      state.playerHand = action.payload
      localStorage.setItem("playerHand", JSON.stringify(action.payload))
    },
    addCardToHand: (state, action) => {
      state.playerHand.push(action.payload)
      localStorage.setItem("playerHand", JSON.stringify(state.playerHand))
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
      state.playerTotal = null
      localStorage.removeItem("playerTotal")
    },
    setPlayerTurn: (state, action) => {
      state.playerTurn = true
      localStorage.setItem("playerTurn", true )
    },
    setDealerTurn: (state, action) => {
      state.playerTurn = false
      localStorage.setItem("playerTurn", false)
    },
  },
})

export const {
  setPlayerHand,
  clearPlayerHand,
  setPlayerTotal,
  clearPlayerTotal,
  addCardToHand,
  setPlayerTurn,
  setDealerTurn,
} = playerSlice.actions

export default playerSlice.reducer
