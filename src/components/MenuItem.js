import React from "react";

function MenuItem({ productName, price, addToCart, sku }) {
    return(
        <a >
            <span class="menu-text"> {`${productName}`}</span>
            
        </a>
    );
 }

 export default MenuItem; 
