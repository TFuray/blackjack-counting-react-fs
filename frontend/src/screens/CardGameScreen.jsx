import { useState } from "react"
import { useSelector } from "react-redux"
import ButtonBar from "../components/cardGame/ButtonBar"
import DealButton from "../components/cardGame/DealButton"
import DisplayDealerCards from "../components/cardGame/DisplayDealerCards"
import TempClearBtn from "../components/cardGame/TempClearBtn"

const CardGameScreen = () => {
  return (
    <>
      <TempClearBtn />
      <div className="rounded-full bg-green-800 h-96 w-4/6">
        <DisplayDealerCards />
      </div>
      <DealButton />
      <ButtonBar />
    </>
  )
}
export default CardGameScreen
