import { Card, Col, Image } from "react-bootstrap";
import ButtonCart from "../ButtonCart/ButtonCart";
export default function Item({ product }) {
  return (
    <Col md="4" className="pb-5">
      <Card>
        <Image className="card-image" src={product.thumbnail} />
        <Card.Body>
          <span className="stock">Stock: {product.available_quantity}</span>
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