import React from 'react';
import '../components/Landing.css';
import { Navbar, Nav, Form } from 'react-bootstrap';

const Landing = () => {

  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">


          <img
            alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top" />{' '}
      Bon Appetite</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="/restaurant">Loyalty Program</Nav.Link>
        </Nav>
        <Form inline>
        
          <a href="/restaurant" class="badge badge-info">Register</a>
        </Form>
      </Navbar>
      <img id="yu" src={process.env.PUBLIC_URL + '/restaurant.jpg'} width='100%' height='100%' />
    </div>
  )
}

export default Landing;