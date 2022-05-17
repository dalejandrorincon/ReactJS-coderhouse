import React from "react"
import { Row, Col, Card, Image, Button, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
export default function ItemDetail({item}) {
  console.log(item)
  return (
      <Card>
        <Card.Body>
          <Row className="align-items-center justify-content-center">
            <Col md="6">
              <Image src={item.thumbnail} />
            </Col>
            <Col md="4">
              <h5 className="box-title">{item.title}</h5>
              <Table striped bordered className="mt-3">
                <tbody>
                  <tr>
                    <td>Marca:</td>
                    <td>{item.attributes[0].name}</td>
                  </tr>
                  <tr>
                    <td>Stock disponible:</td>
                    <td>{item.available_quantity}</td>
                  </tr>
                  <tr>
                    <td>Precio:</td>
                    <td>{item.price} {item.currency_id}</td>
                  </tr>
                </tbody>
              </Table>
              <Button className="btn btn-primary btn-rounded"><FontAwesomeIcon icon={faShoppingCart} size="1x" /> Comprar ahora</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
  )
}