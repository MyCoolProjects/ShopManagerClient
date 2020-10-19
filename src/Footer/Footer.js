import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import westCoast from '../westCoastImg/WestCoastLogo.jpg';
import './Footer.css';
export default class Header extends Component {
    render() {
        return (
            <>
                <Container fluid className="footer">
                    <Row>
                        <Col sm={4} className="pt-4">
                            Тут будут ссылки на наши соц сети и прочее
                            XD
                        </Col>
                        <Col sm={4} className="pt-4">
                            тут переход по страницам тип link
                        </Col>
                        <Col sm={4}>
                            <img src={westCoast} alt="WestCoast" width="50%" className="p-0 m-0" />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
