import { Container, Spinner } from "react-bootstrap";

export default function Loading(){
  return (
    <Container className="text-center">
      <Spinner animation="grow" />
    </Container>
  )
}