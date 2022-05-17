import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom"
/* -------------------------- Bootstrap components -------------------------- */
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            <NavDropdown title="Categorías">
              <NavDropdown.Item href="/categoria/camisetas">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/abrigos">Abrigos</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/cart">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand><Link to="/">Mulana</Link></Navbar.Brand>
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