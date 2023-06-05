import { apiSlice } from "@slices/api/apiSlice"
import {
  useDrawOneMutation,
  useDrawOneQuery,
} from "@slices/api/cards/cardsApiSlice"
import { addCardToHand, setDealerTotal } from "@slices/dealer/dealerSlice"
import TempClearBtn from "@views/cardGame/buttons/TempClearBtn"
import ButtonBar from "@views/cardGame/buttons/buttonBar/ButtonBar"
import DealButton from "@views/cardGame/buttons/buttonBar/DealButton"
import DisplayDealerCards from "@views/cardGame/dealerHand/DisplayDealerCards"
import DisplayPlayerCards from "@views/cardGame/playerHand/DisplayPlayerCards"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const CardGameScreen = () => {
  const { playerTotal } = useSelector((state) => state.player)

  const dispatch = useDispatch()

  const { dealerHand } = useSelector((state) => state.dealer)
  const { dealerTotal } = useSelector((state) => state.dealer)
  const { playerTurn } = useSelector((state) => state.player)

  const { data } = useDrawOneQuery()


  const calcDealerTotal = () => {
    let tempDealerTotal = dealerHand.map((data) => {
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
    let tempTotal = tempDealerTotal.reduce((acc, val) => acc + val, 0)
    dispatch(setDealerTotal(tempTotal))
  }

  const hitDealer = async () => {
    dispatch(addCardToHand(data.cards[0]))
    calcDealerTotal()
    dispatch(apiSlice.util.resetApiState())
  }

  if (!playerTurn) {
    calcDealerTotal()
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
