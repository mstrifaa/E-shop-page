import React from "react";
import ProductCard from "./ProductCard";

export default function Main({ products }){

    const _prods = products.map( (product) =>

        <ProductCard key={product.name} product={product}/>
    )

    return (
        <>
            <div className="main-container" >
                {/* <aside></aside> */}
                <section className="products-container grid-container">
                    {_prods}
                </section>
                <button className="btn btn-outline-secondary" type="button" style={loadMoreBtn}>Load More</button>
            </div>
        </>
    )
}

// const containerStyle = {
//     margin: '10px 0',
//     borderColor: 'black 2px',
//     display: 'grid',
//     justifyContent: 'space-evenly',

//     /* defines the number of columns in your grid layout,
//       and the width of each column.
//       each value the space-separated-list defines the width of the respective column.
//       'auto' - all columns have the same width
//     */
//     gridTemplateColumns: 'auto auto auto', 
//     gap:'2rem',
//     height: 'max-content',
//     padding: '2rem',
//     backgroundColor: 'lightpink'
// }

const loadMoreBtn={
    display: 'block',
    margin: 'auto',
    color: 'black',
    borderRadius: '1.5rem'
}