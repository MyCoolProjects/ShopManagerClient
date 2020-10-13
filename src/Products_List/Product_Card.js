import React, { Component } from 'react'
import { Row, Col, Card, Button, Container, CardColumns, CardImg } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './Product_Card.css'

export default class Product_Card extends Component {

  render() {
    const Star = ({ marked, starId }) => (
      <span className="rating-processors" star-id={starId} role="button" style={{ color: "#ff9933" }}>
        {marked ? "\u2605" : "\u2606"}
      </span>

    );
    // возвращает рейтинг товара относительно параметра {product.reating}
    const StarRating = props => {
      const [rating] = React.useState(
        typeof props.rating == "number" ? props.rating : 0
      );
      const [selection] = React.useState(0);

      return (
        <div>
          {Array.from({ length: 5 }, (v, i) => (
            <Star
              starId={i + 1}
              key={`star_${i + 1} `}
              marked={selection ? selection >= i + 1 : rating >= i + 1}
            />
          ))}
        </div>
      );
    };

    // JОписани карточки товара
    const productItems = this.props.products.map(product => (
      <Card className="product_card">
        {/* <a href={`/product/${product.id}`} > */}
          <Row >
            <Col key={product.id}>
              <img src={`products_img/${product.sku}.jpg`} alt="image-tovara" />
              <div>{product.title}</div>
            </Col>
          </Row>
          <Row><Col style={{ textAlign: 'center' }}><StarRating rating={product.reating} /></Col></Row>
        {/* </a> */}

        {/* <Row>
          <Col>
            <ul >
              <li>{product.description1}</li>
              <li>{product.description2}</li>
              <li>{product.description3}</li>
              <li>{product.description4}</li>
              <li>{product.description5}</li>
              <li>{product.description6}</li>
              <li>{product.description7}</li>
              <li>{product.description8}</li>
            </ul>
          </Col>
        </Row> */}


        <Row>
          <Col >
            <span >{product.price} ₽</span>
          </Col>
        </Row>


        <Row>
          <Col >
            <Button>В корзину</Button>
          </Col>
        </Row>

      </Card >
    ));

    return (
      <>
        {productItems}
      </>
    )
  }
}