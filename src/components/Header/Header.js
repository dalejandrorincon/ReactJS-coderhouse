import CartIcon from "../CartIcon/CartIcon";
/* -------------------------- Bootstrap components -------------------------- */
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#">Mulana</Navbar.Brand>
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