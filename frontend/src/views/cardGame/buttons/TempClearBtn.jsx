import { apiSlice } from "@slices/api/apiSlice"
import { useShuffleCardsQuery } from "@slices/api/cards/cardsApiSlice"
import { clearDealerHand, clearDealerTotal } from "@slices/dealer/dealerSlice"
import {
  clearPlayerHand,
  clearPlayerTotal,
  setPlayerTurn,
} from "@slices/player/playerSlice"
import { useDispatch } from "react-redux"

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
        Clear
        <br />
        Table
      </button>
    </>
  )
}

export default TempClearBtn
