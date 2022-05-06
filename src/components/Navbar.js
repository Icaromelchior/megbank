import React from 'react';
import { Navbar, Nav, Container,ButtonGroup, Button, NavDropdown} from 'react-bootstrap';
import './Navbar.scss';

const Navgation = () => (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Megbank</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="#cartao">Cartão</Nav.Link>
        <Nav.Link href="#quem-somos">Quem Somos</Nav.Link>
        <Nav.Link href="#fac">FAQ</Nav.Link>
      </Nav>
        <ButtonGroup aria-label="Basic example">
          <Button variant="outline-secondary"><NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown></Button>
          <Button variant="outline-secondary">Abra sua conta</Button>
        </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default Navgation;