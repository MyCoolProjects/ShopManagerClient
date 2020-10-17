import React, { Component } from 'react'
import { Row, Col, Container, Carousel } from 'react-bootstrap';

export default class Product extends Component {





  render() {





    return (
      <>
        <Container fluid>

          <div>{this.props.id} {this.props.sku}</div>
          <div>{this.props.title}</div>
          <hr/>
          <div>{this.props.description1}</div>
          <div>{this.props.description2}</div>
          <div>{this.props.description3}</div>
          <div>{this.props.description4}</div>
          <div>{this.props.description5}</div>
          <div>{this.props.description6}</div>
          <div>{this.props.description7}</div>
          <div>{this.props.description8}</div>
          <hr/>
          <div>{this.props.reating}</div>
          <div>{this.props.price}</div>
          <hr/>
          <div>{this.props.availableSizes.join(', ')}</div>



        </Container>




      </>
    )
  }
}