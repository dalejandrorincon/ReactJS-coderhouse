import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap"
export default function ItemListContainer({ title }) {
  return (
    <Container>
      <Row>
        <Col className="my-4"><h2>{title}</h2></Col>
      </Row>
      <Row>
        <Col>
          <ItemList/>
        </Col>
      </Row>
    </Container>
  )
}