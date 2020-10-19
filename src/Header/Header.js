import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
// import westCoastLogo from 'westCoastImg/WestCoastLogo.jpg';
import icon_search from './search.png'
export default class Header extends Component {
  render() {
    return (
      <>

        <Navbar className="header pl-3 pr-3 pt-1 pb-1 m-0" fixed="top" collapseOnSelect expand="md">
          <Navbar.Brand href="/">
            <img src={'westCoastImg/WestCoast.jpg'} alt="WestCoastLogo" width="140px" className="p-0 m-0"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="m-auto" id="responsive-navbar-nav">

            <Nav className="menu mr-auto">
              <Nav.Link><Link className="link" to="/">Домой</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/catalog">Каталог</Link></Nav.Link>
              {/* <Nav.Link><Link className="link" to="/product/3">Product/3</Link></Nav.Link> */}
            </Nav>

            <Form inline className="ml-auto mr-5" style={{ textAlign: "right" }}>
              <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
              <Button variant="secondary">
                <span><img src={icon_search} alt="icon_search" style={{ width: "20%" }} /></span>Search
              </Button>
            </Form>

            <Nav className="ml-5" >
              <Button variant="secondary" className="mr-3">Log In</Button>
              <Button variant="secondary">Sign out</Button>
            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </>
    )
  }
}
