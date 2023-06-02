import { useDispatch } from "react-redux"
import { clearDealerHand } from "../../slices/dealerSlice"
import { clearPlayerHand } from "../../slices/playerSlice"
import { useShuffleCardsQuery } from "../../slices/cardsApiSlice"

const TempClearBtn = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearDealerHand())
    dispatch(clearPlayerHand())
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
