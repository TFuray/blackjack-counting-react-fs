import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiSlice } from "../../../store/slices/api/apiSlice"
import { addCardToHand } from "../../../store/slices/dealer/dealerSlice"
import Loader from "../../../utils/Loader"
import playingCardBack from "../../assets/playingCardBack.svg"

const DisplayDealerCards = () => {
  const dispatch = useDispatch()

  const { dealerHand } = useSelector((state) => state.dealer)
  const { dealerTotal } = useSelector((state) => state.dealer)
  const { playerTurn } = useSelector((state) => state.player)

  const [trigger, { data }] = apiSlice.endpoints.drawOne.useLazyQuery()

  // const hitDealer = async () => {
  //   await trigger()
  //   dispatch(addCardToHand(data.cards[0]))
  // }

  // while (dealerTotal < 17) {
  //   hitDealer()
  // }

  // useEffect(() => {
  //   if (!playerTurn) {
  //     if (dealerTotal < 17) {
  //       hitDealer()
  //     }
  //   }
  // }, [dealerTotal])

  if (dealerHand) {
    return (
      <>
        {playerTurn ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="col-span-1 md:col-span-2 justify-self-center">
              <p className="text-3xl font-bold text-white">
                Total: {playerTurn ? dealerHand["0"]["value"] : dealerTotal}
              </p>
            </div>

            <div className="col-span-2 justify-self-center flex gap-2 ">
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
                <div>
                  <img
                    className="h-36"
                    src={playingCardBack}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="col-span-1 md:col-span-2 justify-self-center">
                <p className="text-3xl font-bold text-white">
                  Total: {dealerTotal}
                </p>
              </div>
              <div className="col-span-2 justify-self-center flex gap-2">
                {dealerHand.map((card) => (
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
          </div>
        )}
      </>
    )
  }
}

export default DisplayDealerCards
