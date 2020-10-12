import React, { Component, lazy } from "react"
import { Container, Row, Col, CardColumns, Card } from "react-bootstrap"
import { Link, animateScroll as scroll } from "react-scroll"
// const Product_Card = lazy(() => import('./Product_Card.js'))
import Product_Card from "./Product_Card.js"
class Products_List extends Component {
  constructor() {
    super();
    this.state = {
      // title: "",
      // size: "",
      // sort: "",
      // reatingSort: "",
      // cartItems: [],
      products: []
      // filteredProducts: []
    };
  }
  componentWillMount() {
    // if (localStorage.getItem("cartItems")) {
    //   this.setState({
    //     cartItems: JSON.parse(localStorage.getItem("cartItems"))
    //   });
    // }
    fetch("http://localhost:3000/products_list")
      .then(res => res.json())
      .catch(err =>
        fetch("Products_DB.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
        // this.listProducts(); //запуск сортировки
      });
  };






  // ДОБАВИТЬ В КОРЗИНУ

  // handleAddToCart = (e, product) => {
  //   this.setState(state => {
  //     const cartItems = state.cartItems;
  //     let productAlreadyInCart = false;

  //     cartItems.forEach(cp => {
  //       if (cp.id === product.id) {
  //         cp.count += 1;
  //         productAlreadyInCart = true;
  //       }
  //     });

  //     if (!productAlreadyInCart) {
  //       cartItems.push({ ...product, count: 1 });
  //     }
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //     return { cartItems: cartItems };
  //   });
  // };

  // ТУТ СОРТИРУЕТСЯ

  // listProducts = () => {
  //   this.setState(state => {
  //     if (state.sort !== "") {
  //       state.products.sort((a, b) =>
  //         state.sort === "lowestprice"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : a.price < b.price
  //             ? 1
  //             : -1
  //       );
  //     } else {
  //       state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
  //     }
  //     if (state.size !== "") {
  //       return {
  //         filteredProducts: state.products.filter(
  //           a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
  //         )
  //       };
  //     }
  //     if (state.title !== "") {
  //       return {

  //         filteredProducts: state.products.filter(
  //           a => a.titleSize.indexOf(state.title.toLowerCase()) >= 0
  //         )
  //       };
  //     }

  //     return { filteredProducts: state.products };
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
                <Col> {/* катекогрии фильтры и прочее */}
                  <div>КАТЕГОРИИ И ФИЛЬТРЫ ПО ЦЕНЕ И ПРОЧАЯ ФИГНЯ</div>
                </Col>
              </Row>



              <Row>
                <Col>
                  <CardColumns> {/* список товаров */}
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
