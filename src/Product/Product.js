import React, { Component } from 'react'
import { Row, Col, Container, Carousel } from 'react-bootstrap';

export default class Product extends Component {





  render() {





    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <div>{this.props.id}</div>
              <div>{this.props.name}</div>
              <hr />
              <div>{this.props.price}</div>
            </Col>

          </Row>




        </Container>




      </>
    )
  }
}