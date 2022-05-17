import CartIcon from "../CartIcon/CartIcon";
import {NavLink} from "react-router-dom"
/* -------------------------- Bootstrap components -------------------------- */
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavLink to="/cart">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>Mulana</Navbar.Brand>
        <Nav className="">
          <Form className="d-flex">
            <FormControl
              type="Search.."
              placeholder="Search"
              className="me-2 search"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Buscar</Button>
          </Form>
          <CartIcon count={10} />
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}