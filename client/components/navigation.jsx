import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">ReComp</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Explore</NavItem>
        <NavItem eventKey={2} href="#">Profile</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
        <NavItem eventKey={2} href="#">Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
