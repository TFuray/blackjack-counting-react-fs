import { useDispatch } from "react-redux"
import { useDealHandQuery } from "../../slices/cardsApiSlice"
import { setDealerHand } from "../../slices/dealerSlice"
import { setPlayerHand } from "../../slices/playerSlice"
import Loader from "../utils/Loader.jsx"

const DealButton = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useDealHandQuery()

  const handleClick = () => {
    if (isLoading) {
      return <Loader />
    }
    console.log(data.cards)
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
