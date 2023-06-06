import { useSelector } from "react-redux"

const NoDealtCards = () => {
  const { dealerHand } = useSelector((state) => state.dealer)
  const { playerHand } = useSelector((state) => state.player)

  if (!dealerHand && !playerHand) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-2 justify-self-center">
            <p className="text-3xl font-bold text-white">
              Dealer
            </p>
        </div>
      </div>
      <br/>
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="col-span-1 md:col-span-2 justify-self-center">
            <p className="text-3xl font-bold text-white">
             Player
            </p>
        </div>
      </div>
      </>
    )
  }
}
export default NoDealtCards
