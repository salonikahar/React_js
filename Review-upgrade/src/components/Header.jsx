 import React from 'react';
 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 
 function Header() {
   return (
    <>
   
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/' ><Button variant="primary">Home</Button></Link>
          <Link to='/add'><Button variant="primary">Add Poduct</Button></Link>
        </Nav>
      </Container>
    </Navbar>

  </>
   )
 }
 
 export default Header
 