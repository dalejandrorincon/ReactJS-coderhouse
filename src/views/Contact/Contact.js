import React from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap"
import { getFirestore, collection, addDoc } from "firebase/firestore";
/* ---------------------------- Libreria Toastify --------------------------- */
import { toast } from 'react-toastify';

export default function Contact() {
  const [data, setData] = React.useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const userContact = {
      user: data
    }
    const db = getFirestore();
    const contactCollection = collection(db, "Contacts");
    addDoc(contactCollection, userContact).then(() => { 
      toast.success(`Gracias por comunicarte con nosotros`, {
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
      <h2>Hablemos</h2>
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
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Label>Dirección de Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu Email" name="email" onChange={handleChange} />
            <Form.Text className="text-muted">
              Nunca compartiremos tu email con nadie más.
            </Form.Text>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Dejanos tu mensaje</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" onChange={handleChange}/> 
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Continuar
        </Button>
      </Form>
    </Container>
  )
}