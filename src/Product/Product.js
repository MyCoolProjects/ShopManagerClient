import React, { Component } from 'react'
import { Row, Col, Container, Button, Carousel, Image } from 'react-bootstrap';
import sopping_cart from '../westCoastImg/shoppingCart.png'
import './Product.css'
export default class Product extends Component {
  render() {
    const specificationsArray = this.props.specifNames.map(specifName => (
      <>

        <Container fluid key={specifName.id}>
          <Row className="pt-2 pb-1">
            <Col sm style={{ textAlign: "left" }}>
              <b>{specifName.name}:</b>
            </Col>
            <Col sm style={{ textAlign: "right" }}>
              {specifName.value}
            </Col>
          </Row>
          <hr className="p-0 m-0" />
        </Container>
      </>

    ))
    return (
      <>
        <Container fluid style={{ fontSize: 20 }} key={this.props.id} expand="md">
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
              <hr color="red"/>
              <Row>
                <Col sm={4}>
                  <Carousel className="carousel mt-3 mb-5" style={{height:"600px"}}>
                    <Carousel.Item className="carousel-item" style={{height:"600px"}}>
                      <Image
                        fluid
                        className="d-block"
                        style={{ position: "relative", objectFit: "cover", height:"600px" }}
                        src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/4ad5d465e580f7d230a427ce2d6a09b6/960x540"
                        alt="First slide"
                      />

                      {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item" style={{height:"600px"}}>
                      <Image
                        fluid
                        className="d-block"
                        style={{ position: "center", objectFit: "cover", height:"600px" }}
                        src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/2268018/9fec1b2a754b40fa78f1fcab9c18fb9d/960x540"
                        alt="Second slide"
                      />

                      {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>

                    <Carousel.Item className="carousel-item" style={{height:"600px"}}>
                      <Image
                        fluid
                        className="d-block "
                        style={{ position: "center", objectFit: "cover", height:"600px" }}
                        src="https://total.kz/storage/a3/a34de8b05cd4567a7e3d91d3f834c50c_resize_w_830_h_465.jpg"
                        alt="Third slide"
                      />

                      {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption> */}
                    </Carousel.Item>
                  </Carousel>
                </Col>

                <Col sm={4} className="pl-5">
                  <Row className="pl-3 pb-5"><b>Характеристики:</b></Row>
                  <Row>{specificationsArray}</Row>
                </Col>

                <Col sm={4} className="pl-5">
                  <Row className="pl-3 pb-5"><b>Цена:</b></Row>
                  <Row className="pb-5">
                    <Col sm style={{ textAlign: "left" }}>
                      <Button variant="secondary" id="addcart" ><img src={sopping_cart} alt="sopping_cart" style={{ width: "20%" }} /><b> В корзину</b></Button>
                    </Col>
                    <Col sm style={{ textAlign: "right" }}>
                      <b>{this.props.price} ₽</b>
                      <hr className="mt-1 p-0 m-0" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
      </>
    )
  }
}