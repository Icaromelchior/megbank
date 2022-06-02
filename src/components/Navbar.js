import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Navbar, Nav,ButtonGroup, Button, NavDropdown} from 'react-bootstrap';
import './Navbar.scss';
import logo from '../essets/logo.svg';

const Navgation = ({ hendleCreateAcc }) => (
  <Navbar variant= 'dark' expand="lg">
        <Container>
    <Navbar.Brand href="#home">
      <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Megbank logo"
        />
    </Navbar.Brand>
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
          <Button variant="outline-light"><NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
          <NavDropdown.Item >
            <Link to='/login'>Pessoa fisica</Link>
          </NavDropdown.Item>
          <NavDropdown.Item >Pessoa juridica</NavDropdown.Item>
        </NavDropdown></Button>
          <Button variant="outline-light" onClick={hendleCreateAcc}>Abra sua conta</Button>
        </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
);

export default Navgation;