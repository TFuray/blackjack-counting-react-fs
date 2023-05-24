import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const DisplayDealerCards = () => {
  const { dealerHand } = useSelector((state) => state.dealer)

  const [dealerCards, setDealerCards] = useState(dealerHand)
  if (dealerHand) {
    return (
      <>
        <div className="flex justify-content-center">
          <div className="">
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
          <div>
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
        </div>
      </>
    )
  }
}
export default DisplayDealerCards
