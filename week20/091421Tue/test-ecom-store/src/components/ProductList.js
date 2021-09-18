import Product from "./Product";
import Title from "./Title";
import React, { Component } from 'react'
import { ProductConsumer } from "./Context";

export default class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                { (value) => {
                                    return value.products.map((aProduct) => {
                                        return <Product key={aProduct.id} product={aProduct}></Product>
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
