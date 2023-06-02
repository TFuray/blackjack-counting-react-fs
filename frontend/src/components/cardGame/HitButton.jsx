import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiSlice } from "../../slices/apiSlice"
import { useDrawOneQuery } from "../../slices/cardsApiSlice"
import { addCardToHand, setPlayerHand } from "../../slices/playerSlice"
import Loader from "../utils/Loader"

const HitButton = () => {
  const [skip, setSkip] = useState(true)
  const dispatch = useDispatch()
  const [trigger, { data, isSuccess }] =
    apiSlice.endpoints.drawOne.useLazyQuery()
  const handleClick = () => {
    trigger()
    console.log(data.cards[0])
    console.log(isSuccess)
    if (isSuccess) {
      dispatch(addCardToHand(data.cards[0] ))
    }
    // dispatch(addCardToHand(data.cards[0]))
  }

  return (
    <button
      onClick={handleClick}
      className="btn btn-square text-white bg-green-600 w-16 outline hover:outline-orange-600 hover:bg-green-900   "
    >
      Hit
    </button>
  )
}
export default HitButton
