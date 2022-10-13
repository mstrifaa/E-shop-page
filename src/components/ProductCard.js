import React from "react";

export default function ProductCard({product}){

    return (
        <>
            <div className="product-card">
                {/* TODO:: add shadows to each card (on hover) */}
                <a href='/'>
                    <div className="product-photo" >
                        {/* complete this section */}
                    </div>
                    <p className="product-description"> {product.name}</p>
                    <p className="product-price">${product.price}</p>
                </a>
            </div>
        </>
    )
}

