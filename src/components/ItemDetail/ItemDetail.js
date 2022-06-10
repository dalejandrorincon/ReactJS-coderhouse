import React from "react"
import { NavLink } from "react-router-dom";
/* ------------------------ importacion de librerias ------------------------ */
import { Row, Col, Card, Image, Button, Table } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
/* --------------- importacion de componentes de presentacion --------------- */
import ButtonCart from "../ButtonCart/ButtonCart";
/* ------------------------ Importacion del contexto ------------------------ */
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ item }) {
  /* ------------- Se obtiene el valor del contexto con useContext recibe "isInCart" y "addToCart"------------ */
  const { addToCart, isInCart } = React.useContext(CartContext);

  /* ------------------------ Estado del Count ------------------------ */
  const [count, setCount] = React.useState(1)
  return (
    <Card>
      <Card.Body>
        <Row className="align-items-center justify-content-center itemDetail">
          <Col md="3">
            <Image src={item.image} />
          </Col>
          <Col md="4">
            <h5 className="box-title">{item.title}</h5>
            <Table striped bordered className="mt-3">
              <tbody>
                <tr>
                  <td>Stock disponible:</td>
                  <td>{item.stock}</td>
                </tr>
                <tr>
                  <td>Precio:</td>
                  <td>{item.price} COP</td>
                </tr>
              </tbody>
            </Table>
            {/* Intercambiabilidad del componente cuando ya se ha agregado al carrito */}
            {isInCart(item.id) ?
              <NavLink to="/cart">
                <Button className="btn btn-primary btn-rounded"><FontAwesomeIcon icon={faShoppingCart} size="1x" /> Ir al carrito</Button>
              </NavLink>
              : <ButtonCart
                onSubmit={() => addToCart(item, count)}
                count={count}
                setCount={setCount}
                stock={item.stock}
              />
            }

          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}