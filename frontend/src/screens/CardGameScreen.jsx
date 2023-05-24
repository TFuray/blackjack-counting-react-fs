import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonBar from "../components/cardGame/ButtonBar"
import DealButton from "../components/cardGame/DealButton"
import DisplayDealerCards from "../components/cardGame/DisplayDealerCards"
import DisplayPlayerCards from "../components/cardGame/DisplayPlayerCards"
import TempClearBtn from "../components/cardGame/TempClearBtn"
import { setDealerTotal } from "../slices/dealerSlice"

const CardGameScreen = () => {
  const dispatch = useDispatch()

  const { dealerHand } = useSelector((state) => state.dealer)
  const { playerHand } = useSelector((state) => state.player)

  // const calcTotal= (hand) => {
  //   if (hand) {
  //     const values = Object.values(hand).map((item) => item.value)
  //     const updated = values.map((value) => {
  //       if (value === "JACK" || "QUEEN" || "KING") {
  //         return 10
  //       } else if (value === "ACE") {
  //         return 11
  //       } else {
  //         return Number.value
  //       }
  //     })
  //     return updated.reduce((acc, curentVal) => acc + curentVal, 0)
  //   } else {
  //     return 0
  //   }
  // }

  return (
    <>
      <TempClearBtn />
      <div className="rounded-pill bg-green-800 w-5/6 py-24">
        <DisplayDealerCards />
        <br />
        <br />
        <DisplayPlayerCards />
      </div>
      <DealButton />
      <ButtonBar />
    </>
  )
}
export default CardGameScreen
