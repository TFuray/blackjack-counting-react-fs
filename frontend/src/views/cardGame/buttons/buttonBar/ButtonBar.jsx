import HitButton from "@views/cardGame/buttons/buttonBar/HitButton"
import StayButton from "@views/cardGame/buttons/buttonBar/StayButton"
import TempClearBtn from "../TempClearBtn"
import DealButton from "./DealButton"
import CheckBasicStrat from "./CheckBasicStrat"

const ButtonBar = () => {
  return (
    <>
      <nav className=" flex justify-around p-2 rounded-full w-128 border-2 bg-slate-700">
        <DealButton/>
        <HitButton />
        <StayButton />
        {/* <button
          className="btn flex bg-red-600 text-white "
          onClick={() => handleTurn}
        >
          stay
        </button> */}
        <button className="btn flex bg-yellow-600 text-white ">
          double <br /> down
        </button>
        <button className="btn flex bg-blue-600 text-white ">split</button>
        <TempClearBtn/>
        <CheckBasicStrat/>
      </nav>
    </>
  )
}
export default ButtonBar
