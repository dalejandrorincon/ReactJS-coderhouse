import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap"
import { getFirestore, collection, addDoc } from "firebase/firestore";
/* ---------------------------- Libreria Toastify --------------------------- */
import { toast } from 'react-toastify';
/* ------------------------ Importacion del contexto ------------------------ */
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
  const [data, setData] = React.useState([]);
  /* ------------- Se obtiene el carrito con useContext ------------ */
  const { cart } = React.useContext(CartContext);

  /* ------------------ Se calcula el valor total del carrito ----------------- */
  let cartTotal = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: cartTotal
    }
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    await addDoc(orderCollection, order).then(({ id }) => {
      toast.success(`Su compra fue exitosa, id de la compra ${id}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    });
  }

  return (

    <Container className="w-75 my-5">
      <h2>Checkout</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mb-3">
            <Form.Label>Nombres</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tus nombre" name="name" onChange={handleChange} />
          </Col>
          <Col className="mb-3">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tus apellidos" name="lastName" onChange={handleChange} />
          </Col>
          <Col className="mb-3">
            <Form.Label>N??mero de identificaci??n</Form.Label>
            <Form.Control type="text" placeholder="DNI" name="dni" onChange={handleChange} />
          </Col>
        </Row>

        <Row>
          <Col md="6" className="mb-3">
            <Form.Label>Direcci??n de residencia</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu direcci??n" name="address" onChange={handleChange} />
          </Col>
          <Col className="mb-3">
            <Form.Label>Apartamento</Form.Label>
            <Form.Control type="text" placeholder="Apartamento" name="apto" onChange={handleChange} />
          </Col>
          <Col className="mb-3">
            <Form.Label>C??digo postal</Form.Label>
            <Form.Control type="text" placeholder="C??digo postal" name="zipCode" onChange={handleChange} />
          </Col>
        </Row>

        <Row>
          <Col className="mb-3">
            <Form.Label>Direcci??n de Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu Email" name="email" onChange={handleChange} />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie m??s.
            </Form.Text>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Continuar
        </Button>
      </Form>
    </Container>
  )
}