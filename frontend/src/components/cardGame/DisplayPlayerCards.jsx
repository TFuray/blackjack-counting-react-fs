import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const DisplayPlayerCards = () => {
  const { playerHand } = useSelector((state) => state.player)
 
  if (playerHand) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-2 border-2 border-red-600 justify-self-center">
            <p className="text-3xl font-bold text-white">
              Total: {}
            </p>
          </div>
          <div className="flex-col justify-self-end">
            <img
              className="h-36"
              src={playerHand["0"]["images"]["png"]}
              alt=""
            />
            <p className="font-semibold text-sm text-white drop-shadow-lg">
              {playerHand["0"]["value"]}
              <span> {playerHand["0"]["suit"]}</span>
            </p>
          </div>
          <div className="flex-col justify-self-start">
            <img
              className="h-36"
              src={playerHand["1"]["images"]["png"]}
              alt=""
            />
            <p className="font-semibold text-sm text-center text-white stroke-black">
              {playerHand["1"]["value"]}
              <span> {playerHand["1"]["suit"]}</span>
            </p>
          </div>
        </div>
      </>
    )
  }
}
export default DisplayPlayerCards
