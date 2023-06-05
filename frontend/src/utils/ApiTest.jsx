import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Loader from "@components/Loader.jsx"
import {
  useDealHandQuery,
  useDrawOneQuery,
  useShuffleCardsQuery,
} from "@store/slices/api/cards/cardsApiSlice.js"

let testHand = () => {
  let [hand, setHand] = useState([])

  const {
    data: deal,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useDealHandQuery()

  if (isLoading) {
    ;<Loader />
  } else if (isSuccess) {
    setHand(deal)
    console.log(hand)
  } else if (isError) {
    ;<>{error.toString()}</>
  }
  return (
    <ul>
      {hand.map((card) => (
        <li>card.</li>
      ))}
    </ul>
  )
}

const ApiTest = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const {
    data: shuffle,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useShuffleCardsQuery()

  let isShuffled
  if (isLoading) {
    isShuffled = <Loader />
  } else if (isSuccess) {
    isShuffled = shuffle
    console.log(isShuffled)
  } else if (isError) {
    isShuffled = <>{error.toString()}</>

    return (
      <>
        <h1 className="text-3xl font-bold">{userInfo.name}'s Cards:</h1>
      </>
    )
  }
}
export default ApiTest
