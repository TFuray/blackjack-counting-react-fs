import { useDispatch, useSelector } from "react-redux"
import Loader from "../utils/Loader"
import { setDealerTurn } from "../../slices/playerSlice"

const StayButton = ({hitDealer}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    return dispatch(setDealerTurn()) && hitDealer()
  }
  return (
    <button
      className="btn btn-square text-white bg-red-600 w-16 outline hover:outline-red-600 hover:bg-red-900  "
      onClick={handleClick}
    >
      Stay
    </button>
  )
}
export default StayButton