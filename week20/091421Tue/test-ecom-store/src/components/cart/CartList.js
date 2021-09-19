import React from 'react'
import Cart from './Cart';
import CartItem from './CartItem'

export default function CartList({value}) {
    const { cart } = value;

    console.log("VALUE:", value);
    console.log("CART:", cart);

    return (
        <div className="container-fluid">
            {
                cart.map((item) => {
                    return (<CartItem key={item.id} item={item} value={value}></CartItem>)
                })
            }
        </div>
    )
}
