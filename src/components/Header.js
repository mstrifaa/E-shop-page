import React from "react";

import logo from "../images/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png";
import { HiSearch } from "react-icons/hi";
// import { BsCart3 } from 'react-icons/bs';

export default function Header(props){
    return (
        <>
            <div id="header-large" style={headingStyle}>
                {/* add shadow and transition (to being sticky-on scroll) */}
                
                <div style={leftPart}>
                    <a href="/"><img id="brand-logo" style={logoStyle} src={logo} alt="logo"/> </a>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <a href='#'>Blog</a>
                    <a href="#"> Youtube </a>
                    <a href="#"> Guides </a>
                    {/* other links 
                    TODO: for future */}
                </div>
                <div id="" style={rightPart} >
                    <form onSubmit={searchStore} action="/search-store">
                      <input type="text" name="search-store" id="search-bar" placeholder="Type any keyword" onKeyUp={onKeyUp}/>
                      <button type="submit" id="search-store" style={{background: 'none', border:'none'}} disabled='disabled'><HiSearch/></button>
                    </form>
                    <a href="/" style={{padding: '1.4rem 0 1.8rem'}} title="See your cart!"> <span className="material-icons md-48">shopping_cart</span> </a>
                </div>
            
            </div>

            <div id="header-small" >
                <div style={leftPart}>
                <a href="/"><img id="brand-logo" style={logoStyle} src={logo} alt="logo"/> </a>
                </div>
                <div>
                    <span class="material-icons material-icons-outlined md-24" onClick={showMenuSmall}>toc</span>
                </div>
            </div>

            <div id="menu-small">
               <div>
                 <span class="material-icons material-icons-outlined">arrow_back_ios_new</span>
               </div>
               <div>
                 <a href="/" style={{padding: '1.4rem 0 1.8rem'}} title="See your cart!"> <span className="material-icons md-48">shopping_cart</span> </a>
                </div>
               <div>
                 <form onSubmit={searchStore} action="/search-store">
                    <input type="text" name="search-store" id="search-bar" placeholder="Type any keyword" onKeyUp={onKeyUp}/>
                    <button type="submit" id="search-store" style={{background: 'none', border:'none'}} disabled='disabled'><HiSearch/></button>
                 </form>
               </div>    
            </div>
        </>
    );
}

let onKeyUp = function(event){
    const searchbtn = document.getElementById("search-store");
    if(event.target.value!==''){
        searchbtn.disabled=false;
    }
    else{
        searchbtn.disabled=true;
    }
    
}
let showMenuSmall = function(e){
    const menu = document.querySelector("#menu-small");
    menu.display = 'block';
}

let searchStore = function(event){
    event.preventDefault()
    // do sth-?
}

const headingStyle = {
};

const rightPart={

    height: 'max-content',
    padding: '1rem',
    
}
const leftPart={  
}

const logoStyle={
    height: '5rem',
    margin: '2px'
}

