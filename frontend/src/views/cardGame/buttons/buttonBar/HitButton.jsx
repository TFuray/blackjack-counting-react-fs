import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiSlice } from "../../store/slices/apiSlice"
import { useDrawOneQuery } from "../../store/slices/cardsApiSlice"
import { addCardToHand, setPlayerTotal } from "../../store/slices/playerSlice"
import Loader from "../../utils/Loader"

const HitButton = () => {
  const dispatch = useDispatch()

  const { playerHand } = useSelector((state) => state.player)
  // const [trigger, { data, isSuccess, isLoading }] =
  //   apiSlice.endpoints.drawOne.useLazyQuery()
  const { data, isLoading, isSuccess } = useDrawOneQuery()

  const handleClick = () => {
    if (isLoading) {
      return <Loader />
    } else if (isSuccess) {
      return dispatch(addCardToHand(data.cards[0]))
    }
  }

  const calcTotal = () => {
    if (playerHand) {
      let total = playerHand.map((val) => {
        if (val.value === "ACE") {
          return 11
        } else if (
          val.value === "KING" ||
          val.value === "QUEEN" ||
          val.value === "JACK"
        ) {
          return 10
        } else {
          return Number(val.value)
        }
      })
      return total.reduce((acc, curr) => acc + curr, 0)
    }
  }
  dispatch(setPlayerTotal(calcTotal()))

  return (
    <button
      onClick={handleClick}
      className="btn btn-square text-white bg-green-600 w-16 outline hover:outline-green-500 hover:bg-green-900   "
    >
      Hit
    </button>
  )
}
export default HitButton
