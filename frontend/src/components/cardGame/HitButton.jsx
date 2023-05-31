import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useDrawOneQuery } from "../../slices/cardsApiSlice"
import { setPlayerHand } from "../../slices/playerSlice"
import Loader from "../utils/Loader"

const HitButton = () => {
  const [skip, setSkip] = useState(true)
  const dispatch = useDispatch()
  const { data } = useDrawOneQuery({skip,})
  console.log(data)
  const handleClick = async () => {
    
  }

  return (
    <button onClick={handleClick} className="btn btn-square text-white bg-green-600 w-16 outline hover:outline-orange-600 hover:bg-green-900   ">
      Hit
    </button>
  )
}
export default HitButton
