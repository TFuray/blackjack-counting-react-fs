import HitButton from "./HitButton"

const ButtonBar = () => {
  return (
    <>
      <nav className=" flex justify-around p-2 rounded-full w-96 border-2 bg-slate-700">
          <HitButton />
          <button className="btn flex bg-red-600 text-white ">stay</button>
          <button className="btn flex bg-yellow-600 text-white ">double <br /> down</button>
          <button className="btn flex bg-blue-600 text-white ">split</button>
      </nav>
    </>
  )
}
export default ButtonBar
