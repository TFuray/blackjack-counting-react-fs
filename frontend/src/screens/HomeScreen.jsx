import { useSelector } from "react-redux"
import AddDogBtn from "../components/AddDogBtn.jsx"
import DogTable from "../components/DogTable.jsx"

const HomeScreen = () => {
  return (
    <>
      <AddDogBtn />
      <DogTable />
    </>
  )
}
export default HomeScreen
