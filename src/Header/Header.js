import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import icon_search from './search-64.png'
export default class Header extends Component {
  render() {
    return (
      <>

        <Navbar className="header" collapseOnSelect expand="md">
          <Navbar.Brand>Website 69</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="m-auto" id="responsive-navbar-nav">

            <Nav className="menu mr-auto">
              <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/products_list">Products List</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/product">Product</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/product">?????</Link></Nav.Link>

            </Nav>

            <Form inline className="ml-auto mr-5" style={{ textAlign: "right" }}>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button variant="outline-danger">
                <span><img src={icon_search} alt="icon_search" style={{ width: "20%" }} /></span>Search
              </Button>
            </Form>

            <Nav className="ml-5" >
              <Button variant="danger" className="mr-3">Log In</Button>
              <Button variant="danger">Sign out</Button>
            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </>
    )
  }
}
