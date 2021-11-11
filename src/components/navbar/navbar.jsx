import cartWidget from './cartWidget';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="index.html"> <img src='/images/logoOdontogenesis.png' alt="Odontogenesis" className="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">Nosotros</Nav.Link>
          <Nav.Link href="#action2">Servicios</Nav.Link>
          <NavDropdown title="Categorias" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Pastas dentales</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Cepillos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <cartWidget />
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar producto"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );
}

export default NavBar;