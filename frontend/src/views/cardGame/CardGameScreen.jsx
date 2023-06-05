import { apiSlice } from "@slices/api/apiSlice"
import { useDrawOneQuery } from "@slices/api/cards/cardsApiSlice"
import { addCardToHand, setDealerTotal } from "@slices/dealer/dealerSlice"
import TempClearBtn from "@views/cardGame/buttons/TempClearBtn"
import ButtonBar from "@views/cardGame/buttons/buttonBar/ButtonBar"
import DealButton from "@views/cardGame/buttons/buttonBar/DealButton"
import DisplayDealerCards from "@views/cardGame/dealerHand/DisplayDealerCards"
import DisplayPlayerCards from "@views/cardGame/playerHand/DisplayPlayerCards"
import { useDispatch, useSelector } from "react-redux"
import { calcTotal } from "./utils/calcTotal/calcTotal"

const CardGameScreen = () => {
  const dispatch = useDispatch()

  const { dealerTotal } = useSelector((state) => state.dealer)
  const { dealerHand } = useSelector((state) => state.dealer)
  const { playerTurn } = useSelector((state) => state.player)

  const { data } = useDrawOneQuery()

  const hitDealer = async () => {
    dispatch(addCardToHand(data.cards[0]))
    calcTotal(dealerHand, dispatch, setDealerTotal)
    dispatch(apiSlice.util.resetApiState())
  }

  if (!playerTurn) {
    calcTotal(dealerHand, dispatch, setDealerTotal)
    if (dealerTotal < 17) {
      hitDealer()
    }
  }

  return (
    <>
      <div className="rounded-full bg-green-800 w-5/6 h-128 py-24 shadow-2xl border-8 border-rose-900">
        <DisplayDealerCards />
        <br />
        <br />
        <DisplayPlayerCards />
      </div>
      <DealButton />
      <TempClearBtn />
      <ButtonBar />
    </>
  )
}
export default CardGameScreen
