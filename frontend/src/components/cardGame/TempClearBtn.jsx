import { useDispatch } from "react-redux"
import { useShuffleCardsQuery } from "../../slices/cardsApiSlice"
import { clearDealerHand, clearDealerTotal } from "../../slices/dealerSlice"
import {
  clearPlayerHand,
  clearPlayerTotal,
  setPlayerTurn,
} from "../../slices/playerSlice"
import { apiSlice } from "../../slices/apiSlice"

const TempClearBtn = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearDealerHand())
    dispatch(clearPlayerHand())
    dispatch(clearDealerTotal())
    dispatch(clearPlayerTotal())
    dispatch(setPlayerTurn())
    dispatch(apiSlice.util.resetApiState())
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-warning mr-3"
      >
        Clear Table
      </button>
    </>
  )
}

export default TempClearBtn
