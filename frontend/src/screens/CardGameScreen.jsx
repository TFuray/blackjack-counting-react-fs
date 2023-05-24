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

  function convertToNum(val) {
    if (val === "ACE") {
      return 11
    } else if (val === "KING") {
      return 10
    } else if (val === "QUEEN") {
      return 10
    } else if (val === "JACK") {
      return 10
    } else {
      return Number(val)
    }
  }
  return (
    <>
      <TempClearBtn />
      <div className="rounded-pill bg-green-800 w-5/6 py-24">
        <DisplayDealerCards />
        <br />
        <br />
        <DisplayPlayerCards
        convertToNum={convertToNum}
        />
      </div>
      <DealButton />
      <ButtonBar />
    </>
  )
}
export default CardGameScreen
