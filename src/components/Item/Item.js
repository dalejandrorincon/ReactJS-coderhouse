import { Card, Col } from "react-bootstrap"
import ButtonCart from "../ButtonCart/ButtonCart"
export default function Item({ product }) {
  return (
    <Col md="3">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
        <span className="stock">Stock: {product.stock}</span>
          <Card.Title>{product.title}</Card.Title>
          <span className="precio">{product.price}$</span>
          <Card.Text>
            {product.description}
          </Card.Text>
          <ButtonCart />
        </Card.Body>
      </Card>
    </Col>
  )
}