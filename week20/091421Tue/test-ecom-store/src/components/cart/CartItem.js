import React from 'react'

export default function CartItem({item, value}) {
    console.log("SDASDADSDASDASD", item);
    console.log("VALU", value);
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeIte} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="asdasd" style={{width:'5rem', height:'5rem'}} className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p>product: {title}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <p>price: {price}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <span onClick={() => increment(id)}>INC</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <span onClick={() => decrement(id)}>DEC</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <i className="fas fas-trash" onClick={() => decrement(id)}/>
            </div>
        </div>
    )
}
