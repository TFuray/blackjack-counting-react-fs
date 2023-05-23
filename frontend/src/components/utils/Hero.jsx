import { Button, Card, Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

const Hero = () => {

  const {userInfo} = useSelector((state) => state.auth)

  return (
    <div className=" py-5 bg-cyan-900 rounded-xl">
      <Container className="d-flex justify-content-center ">
        <Card className="p-5 d-flex flex-column  align-items-center hero-card bg-light w-75">
          <h1 className="text-center text-4xl font-semibold mb-4">BlackJack in React using redux to manage State</h1>
          <p className="text-center mb-4">
            Now with more Redux!
            <br/>
          Live Counting trainer coming soon
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button
                variant="primary"
                className="me-3"
              >
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="secondary">Register</Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  )
}

export default Hero
