import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonBar from "../components/cardGame/ButtonBar"
import DealButton from "../components/cardGame/DealButton"
import DisplayDealerCards from "../components/cardGame/DisplayDealerCards"
import DisplayPlayerCards from "../components/cardGame/DisplayPlayerCards"
import TempClearBtn from "../components/cardGame/TempClearBtn"
import { apiSlice } from "../slices/apiSlice"
import { useDrawOneMutation, useDrawOneQuery } from "../slices/cardsApiSlice"
import { addCardToHand, setDealerTotal } from "../slices/dealerSlice"

const CardGameScreen = () => {
  const { playerTotal } = useSelector((state) => state.player)

  const dispatch = useDispatch()

  const { dealerHand } = useSelector((state) => state.dealer)
  const { dealerTotal } = useSelector((state) => state.dealer)
  const { playerTurn } = useSelector((state) => state.player)

  const { data } = useDrawOneQuery()

  // const [trigger, { data }] = apiSlice.endpoints.drawOne.useLazyQuery()

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
    console.log(tempTotal)
    // dispatch(setDealerTotal(tempTotal))
  }

  const hitDealer = () => {
    if (dealerTotal < 17) {
      dispatch(addCardToHand(data.cards[0]))
      calcDealerTotal()
      dispatch(apiSlice.util.resetApiState())
      // hitDealer()
    }
  }

  // while (dealerTotal < 17) {
  //   hitDealer()
  // }

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
      <ButtonBar hitDealer={hitDealer} />
    </>
  )
}
export default CardGameScreen
