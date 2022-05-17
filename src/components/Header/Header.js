import CartIcon from "../CartIcon/CartIcon";
import { NavLink } from "react-router-dom"
/* -------------------------- Bootstrap components -------------------------- */
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/productos">Productos</NavLink>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/camisetas">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/abrigos">Abrigos</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/cart">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand><NavLink to="/">Mulana</NavLink></Navbar.Brand>
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
          <Nav.Link><CartIcon count={10} /></Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}