import React, { Component, lazy } from "react"
import { Container, Row, Col, CardColumns, Card, Button, Select } from "react-bootstrap"
import { Link, animateScroll as scroll } from "react-scroll"
// const Product_Card = lazy(() => import('./Product_Card.js'))
import Product_Card from "./Product_Card.js"
import './Product_Card.css'

class Products_List extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:3000/products_list")
      .then(res => res.json())
      .catch(err =>
        fetch("Products_DB.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
      });
  };

  render() {

    return (
      <>
        <Container fluid >
          <Row>

            <Col sm={3} > {/* катекогрии фильтры и прочее */}
              <div>КАТЕГОРИИ И ФИЛЬТРЫ</div>
            </Col>



            <Col sm={9} >

              <Row>
                <Col className="filter-2"> {/* катекогрии фильтры и прочее */}
                  <select>
                    <option>Сначала дешевле</option>
                    <option>Сначала дороже</option>
                    <option>Сначала с высоким рейтингом</option>
                    <option>Сначала со скидкой</option>
                  </select>
                  <hr />
                </Col>
              </Row>



              <Row style={{ paddingTop: "20px" }}>
                <Col>
                  <CardColumns className="space-behind-product-card">  {/* список товаров */}
                    <Product_Card products={this.state.products} />
                  </CardColumns>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container >
      </>
    );
  }
}

export default Products_List;
