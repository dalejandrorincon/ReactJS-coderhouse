import CartIcon from "../CartIcon/CartIcon";
import { NavLink, Link } from "react-router-dom"
/* -------------------------- Bootstrap components -------------------------- */
import { Container, Navbar, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Mulana</Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/productos">Productos</NavLink>
            <NavLink className="nav-link" to="/categoria/destacados">Productos destacados</NavLink>
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}