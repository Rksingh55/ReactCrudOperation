
import React, { Component } from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import{Link} from "react-router-dom"
import "./style.css"
export default class Menu extends Component {
  

  render() {
    return (
      <>
      <Navbar bg="black" expand="lg">
      <Container>
      <Navbar.Brand className='data data1'><span>UMS <i class="bi bi-building-add"></i></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" className='data'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/create" className='data'>CreateUser</Link></Nav.Link>
            <Nav.Link><Link to="/update/2" className='data'>Update</Link></Nav.Link>
            <Nav.Link><Link to="/search" className='data'>Search</Link></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
}
