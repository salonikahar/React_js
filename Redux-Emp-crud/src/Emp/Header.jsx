import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Redux
        </Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="text-white">
              Add Data
            </Nav.Link>
            <Nav.Link as={Link} to="/view" className="text-white">
              View Data
            </Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>

  )
}

export default Header
