import React, { Component } from 'react'
import { Container, Carousel, Image, Card, CardDeck} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
export default class Home extends Component {
  render() {
    return (
      <Container fluid style={{ fontSize: 20 }} key={this.props.id} expand="md">
        <Container>
          <div className="mt-5"></div>
          <Carousel variant="secondary">


            <Carousel.Item className="carousel-item" style={{ height: "600px" }}>
              <Image
                fluid
                className="d-block"
                style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                src="https://www.apple.com/v/iphone-12-pro/a/images/meta/iphone-12-pro_overview__d5t6ow03nkmu_og.png"
                alt="1 slide"
              />
              <Carousel.Caption>
                <h3>iPhone 12 Pro</h3>
                <p>В продаже с 30 октября</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className="carousel-item" style={{ height: "600px" }}>
              <Image
                fluid
                className="d-block"
                style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                src="https://www.ixbt.com/img/n1/news/2020/3/1/432423423_large.jpg"
                alt="2 slide"
              />
              <Carousel.Caption className="home-list-carousel">
                <h3>Заголовок новости №2</h3>
                <p>Новость...</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className="carousel-item" style={{ height: "600px" }}>
              <Image
                fluid
                className="d-block"
                style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                src="https://mobile-review.com/articles/2020/image/iphone-12-presentation/scr-off/2.jpg"
                alt="3 slide"
              />
              <Carousel.Caption >
                <h3>Заголовок новости №3</h3>
                <p>Новость...</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className="carousel-item" style={{ height: "600px" }}>
              <Image
                fluid
                className="d-block"
                style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                src="https://www.ixbt.com/img/n1/news/2020/6/2/173400_O_large.jpg"
                alt="4 slide"
              />
              <Carousel.Caption >
                <h3>Заголовок новости №4</h3>
                <p>Новость...</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item className="carousel-item" style={{ height: "600px" }}>
              <Image
                fluid
                className="d-block"
                style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                src="https://mobile-review.com/articles/2020/image/iphone-12-presentation/scr-off/4.jpg"
                alt="5 slide"
              />
              <Carousel.Caption>
                <h3>Заголовок новости №5</h3>
                <p>Новость...</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* РОФЛ с PS 5 можно спокойно удалить, потому что для нне придется создать отдельную категорию и прочее */}
          <Card className="mt-5" fluid>
            <Card.Img src="https://i0.wp.com/itc.ua/wp-content/uploads/2020/08/screen_shot_2020_08_26_at_5.29.22_pm.0.png" alt="PS5 image" />
            <Card.ImgOverlay>
              <Card.Title className="text-center"><h3>СКОРО В ПРОДАЖЕ</h3></Card.Title>
            </Card.ImgOverlay>
          </Card>

          <Container fluid className="p-0 m-0 mt-5 mb-5" expand="md">
            <div><h3>ПОПУЛЯРНЫЕ КАТЕГОРИИ</h3></div>
            <CardDeck className="mt-3" fluid >
              {/* border-0 */}

              <Card bg="white border-0">
                <Link to="/catalog">
                  <Card.Img
                    variant="top"
                    style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                    // 700*900
                    src="https://items.s1.citilink.ru/1129835_v01_b.jpg"
                    alt="Smartphones">
                  </Card.Img>
                </Link>
                <Card.Body>
                  <Link className="Card-Name p-0 m-0" to="/catalog">
                    <Card.Title variant="bottom" style={{ fontSize: "26px" }}><h3>СМАРТФОНЫ</h3></Card.Title>
                  </Link>
                </Card.Body>
              </Card>

              <Card bg="white border-0">
                <Link to="/catalog">
                  <Card.Img
                    variant="top"
                    style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                    src="https://c.dns-shop.ru/thumb/st4/fit/800/650/5b1b7f06868dbb6c9df7e5604c2a04f2/3468acf9c94a7c8731b41886a717e0b471ac3f407d0aed6d8ee7aa0dd27e6212.jpg"
                    alt="Laptops">
                  </Card.Img>
                </Link>
                <Card.Body>
                  <Link className="Card-Name p-0 m-0" to="/catalog">
                    <Card.Title style={{ fontSize: "26px" }}><h3>НОУТБУКИ</h3></Card.Title>
                  </Link>
                </Card.Body>
              </Card>

              <Card bg="white border-0">
                <Link to="/catalog">
                  <Card.Img
                    variant="top"
                    style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                    src="https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/10-series/geforce-gtx-1080-ti-2c50-P@2x.png"
                    alt="Video cards">
                  </Card.Img>
                </Link>
                <Card.Body>
                  <Link className="Card-Name p-0 m-0" to="/catalog">
                    <Card.Title style={{ fontSize: "26px" }}><h3>ВИДЕОКАРТЫ</h3></Card.Title>
                  </Link>
                </Card.Body>
              </Card>

              <Card bg="white border-0">
                <Link to="/catalog">
                  <Card.Img
                    variant="top"
                    style={{ position: "center", objectFit: "cover", height: "100%", width: "100%" }}
                    src="https://img.mvideo.ru/Pdb/small_pic/600/30043267b.jpg"
                    alt="Tablets">
                  </Card.Img>
                </Link>
                <Card.Body>
                  <Link className="Card-Name p-0 m-0" to="/catalog">
                    <Card.Title style={{ fontSize: "26px" }}><h3>ПЛАНШЕТЫ И ЭЛЕКТРОННЫЕ КНИГИ</h3></Card.Title>
                  </Link>
                </Card.Body>
              </Card>

            </CardDeck>
          </Container>

        </Container>
      </Container>
    )
  }
}