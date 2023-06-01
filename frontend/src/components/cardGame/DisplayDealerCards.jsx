import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import playingCardBack from '../../assets/playingCardBack.svg'

const DisplayDealerCards = ({ playerTurn }) => {
  const { dealerHand } = useSelector((state) => state.dealer)
  const { dealerTotal } = useSelector((state) => state.dealer)
  if (dealerHand) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-2 justify-self-center">
            <p className="text-3xl font-bold text-white">
              Total: {dealerTotal}
            </p>
          </div>
          <div className="flex-col justify-self-end">
            <img
              className="h-36"
              src={dealerHand["0"]["images"]["png"]}
              alt=""
            />
            <p className="font-semibold text-sm text-center text-white drop-shadow-lg">
              {dealerHand["0"]["value"]}
              <span> {dealerHand["0"]["suit"]}</span>
            </p>
          </div>
          <div className="flex-col justify-self-start">
            {playerTurn ? (
              <div>
                <img
                  className="h-36"
                  src={playingCardBack}
                  alt=""
                />
                <p className="font-semibold text-sm text-center text-white stroke-black">
                  {dealerHand["1"]["value"]}
                  <span> {dealerHand["1"]["suit"]}</span>
                </p>
              </div>
            ) : (
              <div>
                {" "}
                <img
                  className="h-36"
                  src={dealerHand["1"]["images"]["png"]}
                  alt=""
                />
                <p className="font-semibold text-sm text-center text-white stroke-black">
                  {dealerHand["1"]["value"]}
                  <span> {dealerHand["1"]["suit"]}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}
export default DisplayDealerCards
