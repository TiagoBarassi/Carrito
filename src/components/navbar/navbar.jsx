import CartWidget from './CartWidget';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"> <img src='/images/logoOdontogenesis.png' alt="Odontogenesis" className="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="nosotros">Nosotros</Nav.Link>
              <Nav.Link href="servicios">Servicios</Nav.Link>
              <Nav.Link href="Productos">Productos</Nav.Link>
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavLink to={`/category/Cepillos`}>
                  Cepillos
                </NavLink>
                <NavLink to={`/category/PastasDentales`}>
                  Pastas dentales
                </NavLink>
                <NavLink to={`/category/EnjuagueBucal`}>
                  Enjuages Bucales
                </NavLink>
              </NavDropdown>
            </Nav>
            <CartWidget />
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