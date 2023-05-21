import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import FormContainer from "../components/FormContainer"
import Loader from "../components/Loader"
import { useAddDogMutation } from "../slices/dogApiSlice"

const AddDogForm = () => {
  const [dogName, setDogName] = useState("")
  const [dogBreed, setDogBreed] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const [addDog, { isLoading }] = useAddDogMutation()

  useEffect(() => {
    setUser(userInfo.name)
  }, [userInfo.setUser])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await addDog({ user, dogName, dogBreed }).unwrap()
      toast.success("Dog Added")
      // navigate("/")
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
    navigate("/")
  }

  return (
    <FormContainer>
      <h1>Add Dog</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group
          className="my-2"
          controlId="dogName"
        >
          <Form.Label>Dog's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Dog's Name"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group
          className="my-2"
          controlId="dogBreed"
        >
          <Form.Label>Dog's Breed</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Dog's Breed"
            value={dogBreed}
            onChange={(e) => setDogBreed(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}
        <Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="m-3"
          >
            Add Dog
          </Button>

          <Link to="/">
            <Button
              variant="secondary"
              className=""
            >
              Cancel
            </Button>
          </Link>
        </Form.Group>
      </Form>
    </FormContainer>
  )
}
export default AddDogForm
