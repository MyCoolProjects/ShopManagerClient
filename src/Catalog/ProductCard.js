import React, { Component } from 'react'
import { Row, Col, Card, Button} from 'react-bootstrap';
import './ProductCard.css'
import sopping_cart from './shoppingCart.png'
export default class ProductCard extends Component {

  render() {
    const Star = ({ marked, starId }) => (
      <span className="Card-rating" star-id={starId} role="button">
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
      <Card bg="white" key={product.id} >
        <Row >
          <Col className="Product-card">
            {/* <a href={`/product/${product.id}`} > */}

            <Row >
              <Col className="Card-img">
                <img src={`products_img/${product.sku}.jpg`} alt="image-tovara" />
              </Col>
            </Row>

            <Row className="Card-title pl-4 pr-4">
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
              <Col className="btn-add-cart">
                <Button variant="danger" id="addcart" ><span><img src={sopping_cart} style={{width: "20%"}}/> <b>В корзину</b></span></Button>
              </Col>
            </Row>
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