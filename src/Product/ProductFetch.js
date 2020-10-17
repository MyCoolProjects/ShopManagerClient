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
            description: "",  
            price: ""  
        };
    }
    componentDidMount() {
        fetch("Main.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        id: result.products[0].id,
                        name: result.products[0].name,
                        description: result.products[0].description,
                        price: result.products[0].price
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    };

    render() {
        const { error, isLoaded, id, name, description, price} = this.state;
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
                    id            =  {id} 
                    name           =  {name} 
                    description  =  {description} 
                    price         =  {price}
                />
            )
        }


    }
}

export default ProductFetch;