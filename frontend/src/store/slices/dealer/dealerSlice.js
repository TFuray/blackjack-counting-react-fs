import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dealerHand: localStorage.getItem("dealerHand")
    ? JSON.parse(localStorage.getItem("dealerHand"))
    : null,
  dealerTotal: localStorage.getItem("dealerTotal")
    ? JSON.parse(localStorage.getItem("dealerTotal"))
    : null,
  dealerBust: localStorage.getItem("dealerBust")
    ? JSON.parse(localStorage.getItem("dealerBust"))
    : false,
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
    setDealerBust: (state, action) => {
      state.dealerBust = true
      localStorage.setItem("dealerBust", true)
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
    clearDealerBust: (state, action) => {
      state.dealerBust = null
      localStorage.removeItem("dealerBust")
    },
    clearAllDealer: (state, action) => {
      state.dealerHand = null
      state.dealerBust = null
      state.dealerTotal = null
      localStorage.removeItem("dealerHand")
      localStorage.removeItem("dealerTotal")
      localStorage.removeItem("dealerBust")
    },
  },
})

export const {
  setDealerHand,
  clearDealerHand,
  setDealerTotal,
  clearDealerTotal,
  addCardToHand,
  setDealerBust,
  clearDealerBust,
  clearAllDealer,
} = dealerSlice.actions

export default dealerSlice.reducer
