import { useDispatch } from "react-redux"
import { apiSlice } from "../../../store/slices/api/apiSlice"
import { useShuffleCardsQuery } from "../../../store/slices/api/cards/cardsApiSlice"
import {
  clearDealerHand,
  clearDealerTotal,
} from "../../../store/slices/dealer/dealerSlice"
import {
  clearPlayerHand,
  clearPlayerTotal,
  setPlayerTurn,
} from "../../../store/slices/player/playerSlice"

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
