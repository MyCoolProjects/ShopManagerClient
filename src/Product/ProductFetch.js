import React, { Component } from "react";
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
        // fetch(`/api/product/${id}`)
        //     .then(res => res.json())
        //     .catch(err => {
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
        //}
        // )
        // .then((result) => {
        //     const currProduct = result.products.find((p) => p.id == id);
        //     this.setState({
        //         isLoaded: true,
        //         id: currProduct.id,
        //         name: currProduct.name,
        //         price: currProduct.price,
        //         description: currProduct.description,
        //         product_category: currProduct.product_category,
        //         specifNames: currProduct.specifications
        //     });
        // });
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
                <div>Loading...</div>
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