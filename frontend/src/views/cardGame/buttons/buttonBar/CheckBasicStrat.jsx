import { useDispatch, useSelector } from "react-redux"
import { basicStrat } from "../../utils/basicStrat/basicStrat"
import { convertFace } from "../../utils/convertFace/convertFace"

const CheckBasicStrat = () => {
  const dispatch = useDispatch()

  const { playerHand } = useSelector((state) => state.player)
  const { dealerHand } = useSelector((state) => state.dealer)

  if (!dealerHand || !playerHand) {
    return null
  }
  let pArray = convertFace(playerHand)
  let dArray = convertFace(dealerHand)
  let strat = basicStrat(pArray, dArray[0])

  return (
    <div
      className="tooltip tooltip-bottom tooltip-base-content"
      data-tip={strat}
    >
      <button className="btn btn-base-100 btn-sm">
        Correct <br /> Move
      </button>
    </div>
  )
}
export default CheckBasicStrat
