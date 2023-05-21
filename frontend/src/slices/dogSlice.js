import { CreateSlice } from "@reduxjs/toolkit"

const initialState = {
  dogInfo: localStorage.getItem("dogInfo")
    ? JSON.parse(localStorage.getItem("dogInfo"))
    : null,
}
