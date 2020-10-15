import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <>

        <Navbar className="header" collapseOnSelect expand="md">

          <Navbar.Collapse style={{ textAlign: "center" }}>
            <Nav className="menu" style={{ textAlign: "center" }} >

              <ul>
                <li><a href="/shopmanager.com">Home</a></li>
                <li><a href="/products_list" >Products List</a></li>
                <li><a href="/product" >Product</a></li>
                <li><a >Курсы</a>
                  <ul>
                    <li><a href="/product">Категория B (МКПП)</a></li>
                    <li><a href="/product">Категория B (АКПП)</a></li>
                    <li><a href="/product">Категория BE</a></li>
                    <li><a href="/product">Категория A</a></li>
                    <li><a href="/product">Категория A1</a></li>
                    <li><a href="/product">Категория M</a></li>
                  </ul>
                </li>
                {/*
                                          
                      <li><a href="/prices" ><i className="fa fa-prices"></i>Цены</a></li>
                      <li><a href="/contacts" ><i className="fa fa-prices"></i>Контакты</a></li>
                      <li><a href="/test" ><i className="fa fa-test"></i>Тесты</a></li>
                     */}
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        </Navbar>


      </>
    )
  }
}
