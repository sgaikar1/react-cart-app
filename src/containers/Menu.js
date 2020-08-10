import React from "react";
import MenuItem from "../components/MenuItem"
import CartItem from "../components/CartItem";

function Menu({ menu, addToCart, cart, reduceFromCart }) {
    return (
        <div id="menu">
            <div id="menu-area">
                {Object.keys(menu).map((key, index) => (
                    <span>
                        <MenuItem
                            productName={menu[key].productName}
                            price={menu[key].price}
                            addToCart={addToCart}
                            sku={key}
                        />
                    </span>
                ))}
            </div>
            <br></br>
            <h2>Quotes</h2>
            <div id="cart-area">
                {Object.keys(cart).map((key, index) => (
                    <CartItem
                        product={cart[key]}
                    />
                    
                ))}
            </div>
        </div>
    );
}

export default Menu; 
