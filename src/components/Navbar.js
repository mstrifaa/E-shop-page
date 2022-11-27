import React from "react";

export default function Navbar( { categories } ) {

    const _categories = categories.map((element) =>

        <li key={categories.indexOf(element)} className="category" style={category}>
            <a href="/"> {element} </a>
        </li>
    );

    return (
        <nav>
            <ul className="navbar" style={navbarStyle}>
                {_categories}
            </ul>
        </nav>
    )
}

const navbarStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap", //must have it for responsive design
    backgroundColor: 'rgb(238, 238, 233)',
    height: 'max-content',
    // borderRadius: '5px'
}

const category={
    display:'inline',
    padding: '10px',
    textDecoration: 'underline',
    fontFamily: 'Monaco, monospace'
}