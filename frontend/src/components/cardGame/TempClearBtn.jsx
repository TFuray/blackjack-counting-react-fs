import { useDispatch } from "react-redux"
import { clearDealerHand } from "../../slices/dealerSlice"
import { clearPlayerHand } from "../../slices/playerSlice"
import { useShuffleCardsQuery } from "../../slices/cardsApiSlice"

const TempClearBtn = () => {
  const dispatch = useDispatch()
  const handleClickOne = () => {
    dispatch(clearDealerHand())
  }
  const handleClickTwo = () => {
    dispatch(clearPlayerHand())
  }
  const handleClickThree = () => {
    dispatch(useShuffleCardsQuery())
  }
  return (
    <>
      <button
        onClick={handleClickOne}
        className="btn btn-warning mr-3"
      >
        Dealer ClearBtn
      </button>
      <button
        onClick={handleClickTwo}
        className="btn bg-red-600 text-white"
      >
        Player ClearBtn
      </button>
      <button
        onClick={handleClickThree}
        className="btn bg-purple-600 text-white"
      >
      Shuffle Temp
      </button>
    </>
  )
}

export default TempClearBtn
