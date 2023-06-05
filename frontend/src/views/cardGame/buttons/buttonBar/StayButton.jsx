import { useDispatch, useSelector } from "react-redux"
import { setDealerTurn } from "../../store/slices/playerSlice"
import Loader from "../../utils/Loader"

const StayButton = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    return dispatch(setDealerTurn())
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
