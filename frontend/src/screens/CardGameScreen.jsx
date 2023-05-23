import { useState } from "react"
import { useSelector } from "react-redux"
import ButtonBar from "../components/cardGame/ButtonBar"
import DealButton from "../components/cardGame/DealButton"
import DealerHand from "../components/cardGame/DealerHand"
import PlayerHand from "../components/cardGame/PlayerHand"

const CardGameScreen = () => {
  let [dealerHand, setDealerHand] = useState([])
  let [playerHand, setPlayerHand] = useState([])

  return (
    <>
      <div className="rounded-full bg-green-800 h-96 w-4/6">
        <DealerHand
          dealerHand={dealerHand}
          setDealerHand={setDealerHand}
        />

        <PlayerHand
          playerHand={playerHand}
          setPlayerHand={setPlayerHand}
        />
      </div>
      <DealButton
        setPlayerHand={setPlayerHand}
        setDealerHand={setDealerHand}
      />
      <ButtonBar />

      {/* // notes
        // notes
        // notes */}

      <div className="text-lg flex flex-col w-1/3 mt-72 place-items-end">
        <div className="mt-72">
          <h1>Main Card Sceen</h1>
          <br />
          <h4>- Dealers Hand Component</h4>
          <br />
          <h4>- Some sort of component to act as a table</h4>
          <br />
          <h4>- player hand component</h4>
        </div>
        <br />
        <div>
          <p>useState for current hand </p>
          <p>update redux to keep track of cards left </p>
        </div>
      </div>
    </>
  )
}
export default CardGameScreen
