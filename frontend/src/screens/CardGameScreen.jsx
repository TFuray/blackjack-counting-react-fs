import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonBar from "../components/cardGame/ButtonBar"
import DealButton from "../components/cardGame/DealButton"
import DisplayDealerCards from "../components/cardGame/DisplayDealerCards"
import DisplayPlayerCards from "../components/cardGame/DisplayPlayerCards"
import { setDealerTotal } from "../slices/dealerSlice"

const CardGameScreen = () => {
  const dispatch = useDispatch()

  const { playerTotal } = useSelector((state) => state.player)

  const [playerTurn, setPlayerTurn] = useState(true)

  const handleTurn = () => {
    setPlayerTurn(!playerTurn)
  }

  return (
    <>
      <div className="rounded-full bg-green-800 w-5/6 py-24 shadow-2xl border-8 border-rose-900">
        <DisplayDealerCards playerTurn={playerTurn} />
        <br />
        <br />
        <DisplayPlayerCards
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
        />
      </div>
      <DealButton />
      <ButtonBar handleTurn={handleTurn} />
    </>
  )
}
export default CardGameScreen
