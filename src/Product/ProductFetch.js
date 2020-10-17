import React, { Component } from "react";
import Product from './Product.js'


class ProductFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            sku: "",
            title: "",
            description1: "",
            description2: "",
            description3: "",
            description4: "",
            description5: "",
            description6: "",
            description7: "",
            description8: "",
            availableSizes: [],
            titleSize: [],
            price: "",
            reating: "",
            isFreeShipping: ""
        };
    }
    componentDidMount() {
        fetch("Products_DB.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        id: result.products[0].id,
                        sku: result.products[0].sku,
                        title: result.products[0].title,
                        description1: result.products[0].description1,
                        description2: result.products[0].description2,
                        description3: result.products[0].description3,
                        description4: result.products[0].description4,
                        description5: result.products[0].description5,
                        description6: result.products[0].description6,
                        description7: result.products[0].description7,
                        description8: result.products[0].description8,
                        availableSizes: result.products[0].availableSizes,
                        titleSize: result.products[0].titleSize,
                        price: result.products[0].price,
                        reating: result.products[0].reating,
                        isFreeShipping: result.products[0].isFreeShipping
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
        const { error, isLoaded, id, sku, title, description1, description2, description3, description4, description5, description6, description7, description8, availableSizes, titleSize, price, reating, isFreeShipping} = this.state;
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
                    sku           =  {sku} 
                    title         =  {title} 
                    description1  =  {description1} 
                    description2  =  {description2}
                    description3  =  {description3}
                    description4  =  {description4}
                    description5  =  {description5}
                    description6  =  {description6}
                    description7  =  {description7}
                    description8  =  {description8}
                    price         =  {price}
                    availableSizes = {availableSizes}
                    reating       =  {reating}
                />

            )
        }


    }
}

export default ProductFetch;