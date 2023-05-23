import { useDealHandQuery } from "../../slices/cardsApiSlice"

const DealButton = ({ setPlayerHand, setDealerHand }) => {
  const {
    data: cards,
    isLoading,
    isSuccess,
    isError, 
    error,
  } = useDealHandQuery()

  console.log(cards)


  return (
    <>
      <div>DealButton</div>
    </>
  )
}
export default DealButton
