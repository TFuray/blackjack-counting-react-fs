import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dealerHand: localStorage.getItem("dealerHand")
    ? JSON.parse(localStorage.getItem("dealerHand"))
    : null,
    dealerTotal: localStorage.getItem('dealerTotal')? JSON.parse(localStorage.getItem('dealerTotal')) : null,
}

const dealerSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    setDealerHand: (state, action) => {
      state.dealerHand = action.payload
      localStorage.setItem("dealerHand", JSON.stringify(action.payload))
    },
    addCardToHand: (state, action) => {
      state.dealerHand.push(action.payload)
      localStorage.setItem("dealerHand", JSON.stringify(state.dealerHand))
    },
    setDealerTotal: (state, action) => {
      state.dealerTotal = action.payload
      localStorage.setItem("dealerTotal", JSON.stringify(action.payload))
    },
    // Clear local storage
    clearDealerHand: (state, action) => {
      state.dealerHand = null
      localStorage.removeItem("dealerHand")
    },
    clearDealerTotal: (state, action) => {
      state.dealerTotal = null
      localStorage.removeItem("dealerTotal")
    },
  },
})

export const { setDealerHand, clearDealerHand, setDealerTotal, clearDealerTotal, addCardToHand } = dealerSlice.actions

export default dealerSlice.reducer
