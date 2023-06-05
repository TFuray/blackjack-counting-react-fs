import { useDispatch, useSelector } from "react-redux"
import { useDealHandQuery } from "../../../../store/slices/api/cards/cardsApiSlice"
import {
  clearDealerTotal,
  setDealerHand,
  setDealerTotal,
} from "../../../../store/slices/dealer/dealerSlice"
import {
  setPlayerHand,
  setPlayerTotal,
} from "../../../../store/slices/player/playerSlice"
import Loader from "../../../../utils/Loader.jsx"

const DealButton = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useDealHandQuery()

  const handleClick = async () => {
    if (isLoading) {
      return <Loader />
    }
    let cards = data.cards.map((card) => card)
    cards = cards.map((el) => el)
    let player = cards.slice(0, 2)
    let dealer = cards.slice(2)

    let dealerTotal = dealer.map((data) => {
      if (data.value === "ACE") {
        return 11
      } else if (data.value === "KING") {
        return 10
      } else if (data.value === "QUEEN") {
        return 10
      } else if (data.value === "JACK") {
        return 10
      } else {
        return Number(data.value)
      }
    })
    let playerTotal = player.map((data) => {
      if (data.value === "ACE") {
        return 11
      } else if (data.value === "KING") {
        return 10
      } else if (data.value === "QUEEN") {
        return 10
      } else if (data.value === "JACK") {
        return 10
      } else {
        return Number(data.value)
      }
    })
    let tempPlayer = playerTotal.reduce((acc, val) => acc + val, 0)
    let tempTotal = dealerTotal.reduce((acc, val) => acc + val, 0)
    dispatch(setDealerHand(dealer))
    dispatch(setPlayerHand(player))
    dispatch(setDealerTotal(tempTotal))
    dispatch(setPlayerTotal(tempPlayer))
  }

  return (
    <>
      <div className="bg-slate-700 w-36 flex justify-center rounded-full p-4 ">
        <button
          onClick={handleClick}
          className="btn btn-accent"
        >
          DealButton
        </button>
      </div>
    </>
  )
}
export default DealButton
