import { Card, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Item({ product }) {
  return (
    <Col md="4" className="pb-5">
      <Card>
        <Link to={`/producto/${product.id}`}><Image className="card-image" src={product.thumbnail} /></Link>
        <Card.Body>
          <span className="stock">Stock: {product.available_quantity}</span>
          <Card.Title>{product.title}</Card.Title>
          <span className="precio">{product.price}$</span>
          <Card.Text>
            {product.description}
          </Card.Text>
          <div className="w-75 mx-auto mt-2 row">
            <Button type="button" variant="outline-secondary" href={`/producto/${product.id}`} >Ver detalles del producto</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}