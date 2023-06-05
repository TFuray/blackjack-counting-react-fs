import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPlayerTotal } from "@slices/player/playerSlice"
import Loader from "@utils/Loader"
import TempClearBtn from "@views/cardGame/buttons/TempClearBtn"

const DisplayPlayerCards = () => {
  const { playerHand } = useSelector((state) => state.player)
  const { playerTotal } = useSelector((state) => state.player)
  const { playerTurn } = useSelector((state) => state.player)

  if (playerHand) {
    return (
      <>
        <div className="grid grid-cols-1 md: gap-2 ">
          <div className="col-span-1 md:col-span-2 justify-self-center">
            {playerTotal < 22 ? (
              <p className="text-3xl font-bold text-white">
                Total: {playerTotal}
              </p>
            ) : (
              <div>
                <p className="text-3xl font-bold text-red-600 drop-shadow-2xl font-outline">
                  Bust: {playerTotal}
                </p>
                <TempClearBtn />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-2 ">
            {playerHand.map((card) => (
              <div
                key={card.code}
                className="flex-col justify-self-end"
              >
                <img
                  className="h-36"
                  src={card.image}
                  alt=""
                />
                <p className="font-semibold text-xs text-center text-white stroke-black">
                  {card.value}
                  <span> {card.suit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}
export default DisplayPlayerCards
