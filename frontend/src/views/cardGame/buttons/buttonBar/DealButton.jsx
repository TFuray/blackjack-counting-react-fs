import {
  useDealHandQuery,
  useLazyShuffleCardsQuery
} from "@store/slices/api/cards/cardsApiSlice"
import { setDealerHand, setDealerTotal } from "@store/slices/dealer/dealerSlice"
import { setPlayerHand, setPlayerTotal } from "@store/slices/player/playerSlice"
import Loader from "@utils/Loader.jsx"
import { useDispatch, useSelector } from "react-redux"
import { calcTotal } from "../../utils/calcTotal/calcTotal"
import { apiSlice } from "@/store/slices/api/apiSlice"

const DealButton = () => {
  const dispatch = useDispatch()
  const { data } = useDealHandQuery()
  const [trigger, result] = apiSlice.useLazyShuffleCardsQuery()

  const { playerHand } = useSelector((state) => state.player)
  const { dealerHand } = useSelector((state) => state.dealer)

  const handleClick = () => {
    if (data.remaining < 20) {
      trigger()
      console.log(result)
    }
    let cards = data.cards.map((card) => card)
    cards = cards.map((el) => el)
    let player = cards.slice(0, 2)
    let dealer = cards.slice(2)

    dispatch(setDealerHand(dealer))
    dispatch(setPlayerHand(player))
    calcTotal(playerHand, dispatch, setPlayerTotal)
    calcTotal(dealerHand, dispatch, setDealerTotal)
  }

  return (
    <>
      {/* <div className="bg-slate-700 w-36 flex justify-center rounded-full p-4 "> */}
      <button
        onClick={handleClick}
        className="btn btn-accent"
      >
        Deal
      </button>
      {/* </div> */}
    </>
  )
}
export default DealButton
