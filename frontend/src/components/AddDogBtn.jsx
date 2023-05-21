import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const AddDogBtn = () => {
  return (
    // <Button variant="primary">
      <Link to='/adddog'><Button>Add Dog </Button></Link>
      // Add Dog
    // </Button>
  )
}
export default AddDogBtn
