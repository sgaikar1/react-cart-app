import React, { useState } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

function MenuCart() {
    const[cartTotal, setTotal] = useState(0)
    return(
        <div id="menu-cart">
            <Menu/>
            <Cart total = {cartTotal}/> 
        </div>
    );
 }

 export default MenuCart; 
