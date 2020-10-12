import React, { Component } from 'react'
import { Row, Col, Card, Button, Container, CardDeck, Carousel } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


export default class Product extends Component {

  // didmount
  render() {





    return (
      <>
        <Container fluid>
          <Row>
            <Col>
              <div>TITLE name of product</div>
            </Col>
          </Row>

          <Row>
            <Col sm={4}>
              <Carousel>

                <Carousel.Item>
                  <img src="https://img.mvideo.ru/Pdb/30053163b2.jpg" alt="carousel_img2" />
                </Carousel.Item>

                <Carousel.Item>
                  <img src="https://img.mvideo.ru/Pdb/30053163b3.jpg" alt="carousel_img3" />
                </Carousel.Item>

                <Carousel.Item>
                  <img src="https://img.mvideo.ru/Pdb/30053163b4.jpg" alt="carousel_img4" />
                </Carousel.Item>

                <Carousel.Item>
                  <img src="https://img.mvideo.ru/Pdb/30053163b5.jpg" alt="carousel_img5" />
                </Carousel.Item>

                <Carousel.Item>
                  <img src="https://img.mvideo.ru/Pdb/30053163b6.jpg" alt="carousel_img6" />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col sm={4}>
              <Row>
                <Col>
                  <div><b>Встроенная память (ROM)</b></div>
                  <div>____</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div><b>Цвет</b></div>
                  <div>____</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div><b>Характеристики</b></div>
                  <div>____</div>
                </Col>
              </Row>
            </Col>
          </Row>


        </Container>




      </>
    )
  }
}