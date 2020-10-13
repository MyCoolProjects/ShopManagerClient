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

    // Описани карточки товара
    const productItems = this.props.products.map(product => (
      <Card className="all_product_card" key={product.id} >

        {/* <a href={`/product/${product.id}`} > */}

        <Row className="Card-img">
          <Col >
            <img src={`products_img/${product.sku}.jpg`} alt="image-tovara" />
          </Col>
        </Row>

        <Row className="Card-title">
          <Col >
            <div>{product.title}</div>
          </Col>
        </Row>

        <Row className="Card-rating">
          <Col>
            <StarRating rating={product.reating} />
          </Col>
        </Row>
        {/* </a> */}


        <Row className="price">
          <Col>
            <span ><b>{product.price} ₽</b></span>
          </Col>
        </Row>

        <Row>
          <Col >
            <Button className="Button-add-cart"><b>В корзину</b></Button>
          </Col>
        </Row>

        {/* //лишняя для карточки инфа
        <Row>
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
        </Row>
        */}




      </Card >
    ));

    return (
      <>
        {productItems}
      </>
    )
  }
}