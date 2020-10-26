import React, { Component } from "react";
import { Container, Button, Spinner } from 'react-bootstrap';

import Product from './Product.js'


class ProductFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            name: "",
            price: "",
            description: "",
            product_category: "",
            specifNames: []

        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`/api/product/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Not 2xx response");
                }
            })
            .then(res => res.json())
            .then((result) => {
                const currProduct = result.products.find((p) => p.id == id);
                this.setState({
                    isLoaded: true,
                    id: currProduct.id,
                    name: currProduct.name,
                    price: currProduct.price,
                    description: currProduct.description,
                    product_category: currProduct.product_category,
                    specifNames: currProduct.specifications
                });
            })
            .catch(err => {
                console.log(err)
                fetch("/Main.json")
                    .then(res => res.json())
                    .then((result) => {
                        const currProduct = result.products.find((p) => p.id == id);
                        this.setState({
                            isLoaded: true,
                            id: currProduct.id,
                            name: currProduct.name,
                            price: currProduct.price,
                            description: currProduct.description,
                            product_category: currProduct.product_category,
                            specifNames: currProduct.specifications
                        });
                    },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            })
                        }
                    )
            });
    };

    render() {
        const { error, isLoaded, id, name, price, description, product_category, specifNames } = this.state;
        if (error) {
            return (
                <div>Error {error.message}</div>
            )
        }
        else if (!isLoaded) {
            return (
                <Container fluid className="pt-5 mt-5" style={{ textAlign: "center", verticalAlign: "middle", height:"757px", fontSize: 40 }}>
                    <Button variant="dark" disabled>
                        <Spinner
                            as="span"
                            animation="border"
                            size="md"
                            role="status"
                            aria-hidden="true"
                        />
                        {" "} Loading...
                    </Button>
                </Container>
            )
        }
        else {
            return (
                <Product
                    id={id}
                    name={name}
                    price={price}
                    description={description}
                    product_category={product_category.name}
                    specifNames={specifNames}
                />
            )
        }
    }
}

export default ProductFetch;