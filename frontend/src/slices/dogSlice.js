import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dogInfo: localStorage.getItem("dogInfo")
    ? JSON.parse(localStorage.getItem("dogInfo"))
    : null,
}

const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    getDogs: (state, action) => {
      state.dogInfo = action.payload
      localStorage.setItem("dogInfo", JSON.stringify(action.payload))
    },
  },
})

export const { getDogs } = dogSlice.actions

export default dogSlice.reducer
