import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dealerHand: localStorage.getItem("dealerHand")
    ? JSON.parse(localStorage.getItem("dealerHand"))
    : null,
}

const dealerSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    setDealerHand: (state, action) => {
      state.dealerHand = action.payload
      localStorage.setItem("dealerHand", JSON.stringify(action.payload))
    },
    // Clear local storage
    clearDealerHand: (state, action) => {
      state.dealerHand = null
      localStorage.removeItem("dealerHand")
    },
  },
})

export const { setDealerHand, clearDealerHand } = dealerSlice.actions

export default dealerSlice.reducer
