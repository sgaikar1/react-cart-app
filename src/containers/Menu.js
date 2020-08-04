import React from "react";
import MenuItem from "../components/MenuItem"

function Menu({menu, addToCart}) {
    return(
        <div id="menu">
        <h2>Menu</h2>
        <div id="menu-area">
           {Object.keys(menu).map((key, index) => (
            <MenuItem
                productName={menu[key].productName}
                price={menu[key].price}
                addToCart={addToCart}
                sku={key}
            />
        ))}
        </div>
        </div>
    );
 }

 export default Menu; 
