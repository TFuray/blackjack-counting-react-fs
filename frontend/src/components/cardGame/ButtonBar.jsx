const ButtonBar = () => {
  return (
    <>
      <nav className=" flex justify-between w-96 border-2 bg-slate-700 border-red-600">
          <button className="btn flex bg-green-600 text-white ">hit</button>
          <button className="btn flex bg-red-600 text-white ">stay</button>
          <button className="btn flex bg-yellow-600 text-white ">double <br /> down</button>
          <button className="btn flex bg-blue-600 text-white ">split</button>
      </nav>
    </>
  )
}
export default ButtonBar
