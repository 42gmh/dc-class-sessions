import React, { Component } from 'react';
import { ProductConsumer } from './Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

// 3:08
export default class Details extends Component {
    render() {
        return (
        <ProductConsumer>
            {(value) => {
            const { id, title, img, price, company, info, inCart } = value.detailProduct;
            return (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mol-md-6 my-3 mx-auto">
                            <img src={img} className="img-fluid" alt="Product" />
                        </div>

                        <div className="col-10  mol-md-6 my-3 text-capitalize mx-auto">
                            <h2>model : {title}</h2>

                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by : <span className="text-uppercase">{company}</span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>price : <span>$</span>{price}</strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about the product:
                            </p>

                            <p className="text-muted lead">
                                {info}
                            </p>

                            <Link to="/">
                                <ButtonContainer>
                                    Back to products
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer
                                disabled={inCart} 
                                onClick={
                                    () => {
                                        value.addToCart(id);
                                    }
                                    }>
                                {
                                    inCart ? "In Cart." : "Add To Cart."
                                }
                            </ButtonContainer>
                        </div>
                    </div>
                </div>

            )
            }}
        </ProductConsumer>
      );
    }
}

