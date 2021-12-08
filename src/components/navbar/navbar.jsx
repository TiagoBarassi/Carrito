import CartWidget from './CartWidget';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react'
import Products from '../../JSON/DataList.json';

const NavBar = () => {
    const [data,setData]=useState(Products);
    const filterResult=(catItem)=>{
      const result=Products.filter((curData)=>{
        return curData.categoria===catItem;
      });
      setData(result)
    }

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
                <LinkContainer to="/category/Cepillos" onClick={()=>filterResult('Cepillo')}>
                  <Nav.Link>
                    Cepillos
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/PastasDentales" onClick={()=>filterResult('Dentifrico')}>
                  <Nav.Link>
                    Pastas Dentales
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/EnjuagueBucal" onClick={()=>filterResult('Enjuague')}>
                  <Nav.Link>
                    Enjuague Bucal
                  </Nav.Link>
                </LinkContainer>
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