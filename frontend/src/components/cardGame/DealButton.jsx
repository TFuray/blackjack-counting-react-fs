import { useDispatch, useSelector } from "react-redux"
import { useDealHandQuery } from "../../slices/cardsApiSlice"
import { setDealerHand } from "../../slices/dealerSlice"
import { setPlayerHand } from "../../slices/playerSlice"
import { clearDealerTotal, setDealerTotal } from "../../slices/dealerSlice"
import Loader from "../utils/Loader.jsx"

const DealButton = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useDealHandQuery()

  // const { dealerHand } = useSelector((state) => state.dealer)
  // const { playerHand } = useSelector((state) => state.player)
  // const {dealerTotal} = useSelector((state)=> state.dealer )
  // const calcTotal = (hand) => {
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
  const handleClick = async () => {
    if (isLoading) {
      return <Loader />
    }
    let cards = data.cards.map((card) => card)
    cards = cards.map((el) => el)
    let player = cards.slice(0, 2)
    let dealer = cards.slice(2)
    dispatch(setDealerHand({ ...dealer }))
    dispatch(setPlayerHand({ ...player }))
    }

  return (
    <>
      <div className="bg-slate-700 w-36 flex justify-center rounded-full p-4 ">
        <button
          onClick={handleClick}
          className="btn btn-accent"
        >
          DealButton
        </button>
      </div>
    </>
  )
}
export default DealButton
