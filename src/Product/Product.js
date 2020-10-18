import React, { Component } from 'react'
import { Row, Col, Container, Carousel } from 'react-bootstrap';

export default class Product extends Component {





  render() {
    const array = this.props.specifNames.map(specifName => (
      <>

        <Container fluid key={specifName.id}>
          <Row  className="align-middle pt-2 pb-1" style={{verticalAlign: "center"}}>
            <Col sm style={{ textAlign: "left"}}>
              <b>{specifName.name}:</b>
            </Col>
            <Col sm style={{ textAlign: "right"}}>
              {specifName.value}
            </Col>
          </Row>
          <hr className="p-0 m-0"/>
        </Container>
      </>

    ))





    return (
      <>
        <Container fluid>
          <Row className="mt-5">
            <Col sm={1}></Col>
            <Col sm={10}>
              <Row>
                <Col className="pl-5" >
                  {this.props.name}
                </Col>
              </Row>
              <Row>
                <Col className="pl-5" style={{ textAlign: "left" }} >
                  <div><b>Тут будет рейтинг</b></div>
                </Col>
                <Col className="pr-5" style={{ textAlign: "right" }}>
                  <div>Код товара: {this.props.id}</div>
                </Col>
              </Row>
              <hr color="red" style={{color: "red"}} />
              <Row>
                <Col sm={4}>
                  <div><b>карусель</b></div>
                </Col>
                <Col sm={4}>
                  <Row className="pl-3 pb-3"><b>Характеристики:</b></Row>
                  <Row>{array}</Row>
                </Col>
                <Col sm={4}>
                </Col>
              </Row>
              <div>{this.props.price}</div>
              {/* <div>{this.props.description}</div> */}
              {/* <div>{this.props.product_category}</div> */}
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </>
    )
  }
}