import React from "react";
import img from "../images/product.jpg"
export default function ProductCard({product}){

    return (
        <>
            <div className="product-card">
                {/* TODO:: add shadows to each card (on hover) */}
                <a href='/'>
                    <div className="product-photo" >
                        {/* complete this section */}
                        <img className="product-image" src={img} alt="picture of product" />
                    </div>
                    <p className="product-title"> {product.name}</p>
                    <p className="product-price">${product.price}</p>
                </a>
            </div>
        </>
    )
}

