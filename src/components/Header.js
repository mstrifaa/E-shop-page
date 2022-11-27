import React from "react";

import logo from "../images/adobe-illustrator-cc-logo-C1DC5A6D09-seeklogo.com.png";
import { HiSearch } from "react-icons/hi";

// import { BsCart3 } from 'react-icons/bs';

export default function Header(props){
    return (
        <>
            <div id="header-large" >
                {/* add shadow and transition (to being sticky on scroll) */}
                
                <div>
                    <a href="/"><img id="brand-logo" style={logoStyle} src={logo} alt="logo"/> </a>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <a href='#' className="links-to-others"> Blog </a>
                    <a href="#" className="links-to-others"> Youtube </a>
                    <a href="#" className="links-to-others"> Guides </a>
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
                <div>
                <a href="/"><img id="brand-logo" style={logoStyle} src={logo} alt="logo"/> </a>
                </div>
                <div>
                    <span id="show-menu-small-btn" className="material-icons md-48" onClick={showMenuSmall}>toc</span>
                </div>
            </div>

            <div id="menu-small">
               <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                 <span id="collapse-menu-btn" onClick={collapseMenuSmall} className="material-icons material-icons-outlined" style={{padding: '1rem'}}>arrow_back_ios_new</span>
                 <a href="/" style={{padding: '1rem 1.8rem'}} title="See your cart!"> <span className="material-icons md-48">shopping_cart</span> </a>
               </div>
               <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <a href='#' className="links-to-others"> Blog </a>
                    <a href="#" className="links-to-others"> Youtube </a>
                    <a href="#" className="links-to-others"> Guides </a>
                    {/* other links 
                    TODO: for future */}
                </div>
               <div>
                 <form onSubmit={searchStore} action="/search-store">
                    <input type="text" name="search-store" id="search-bar" placeholder="Type any keyword" onKeyUp={onKeyUp} style={{width: '80%'}}/>
                    <button type="submit" style={{background: 'none', border:'none'}} disabled='disabled'><HiSearch/></button>
                 </form>
               </div>    
            </div>
        </>
    );
}

let onKeyUp = function(event){
    //const searchbtn = document.getElementsByTagName("button['type'='submit']"); // the other search button needs to change 
    console.log(event.target.nextSibling);
    if(event.target.value!==''){
        event.target.nextSibling.disabled=false;
    }
    else{
        event.target.nextSibling.disabled=true;
    }

    
}

let showMenuSmall = function(e){
    const menu = document.querySelector("#menu-small");
    menu.style.width = '15rem'; //setting inline css, must set a numeric value for transition  to take effect
    // document.body.style.backgroundColor = "rgba(0,0,0,0.2)" 
}
let searchStore = function(event){
    event.preventDefault()
    // do sth-?
}

let collapseMenuSmall = function(e){
    const menu = document.querySelector("#menu-small");
    menu.style.width = 0;
}
const rightPart={

    height: 'max-content',
    padding: '1rem',
    
}

const logoStyle={
    height: '4rem',
    // margin: '2px'
}

